import { graphql } from "react-relay"
import { setupTestWrapperTL } from "v2/DevTools/setupTestWrapper"
import {
  CreateArtworkAlertSectionFragmentContainer,
  getAttributionClassIdByLabel,
} from "../CreateArtworkAlertSection"
import { CreateArtworkAlertSection_Test_Query } from "v2/__generated__/CreateArtworkAlertSection_Test_Query.graphql"
import { fireEvent, screen } from "@testing-library/react"
import { useTracking } from "react-tracking"
import { useSystemContext } from "v2/System"

jest.unmock("react-relay")
jest.mock("react-tracking")
jest.mock("v2/System/useSystemContext")

const { renderWithRelay } = setupTestWrapperTL<
  CreateArtworkAlertSection_Test_Query
>({
  Component: CreateArtworkAlertSectionFragmentContainer,
  query: graphql`
    query CreateArtworkAlertSection_Test_Query @relay_test_operation {
      artwork(id: "test-artwork-id") {
        ...CreateArtworkAlertSection_artwork
      }
    }
  `,
})

describe("CreateArtworkAlertSection", () => {
  const mockuseTracking = useTracking as jest.Mock
  const trackEvent = jest.fn()
  const mockuseSystemContext = useSystemContext as jest.Mock

  beforeEach(() => {
    mockuseTracking.mockImplementation(() => ({
      trackEvent,
    }))

    mockuseSystemContext.mockImplementation(() => {
      return {
        isLoggedIn: true,
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should correctly render placeholder", () => {
    const placeholder = "Artworks like: Some artwork title"
    renderWithRelay({
      Artwork: () => Artwork,
    })

    fireEvent.click(screen.getByText("Create Alert"))

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
  })

  it("should correctly render pills", () => {
    renderWithRelay({
      Artwork: () => Artwork,
    })

    fireEvent.click(screen.getByText("Create Alert"))

    expect(screen.getByText("Banksy")).toBeInTheDocument()
    expect(screen.getByText("Limited Edition")).toBeInTheDocument()
  })

  it("should correctly track event when `Create Alert` button is pressed", () => {
    renderWithRelay({
      Artwork: () => Artwork,
    })

    fireEvent.click(screen.getByText("Create Alert"))

    expect(trackEvent).toHaveBeenCalledWith({
      action: "clickedCreateAlert",
      context_page_owner_type: "artwork",
      context_page_owner_id: "artwork-id",
      context_page_owner_slug: "artwork-slug",
    })
  })
})

describe("getAttributionClassIdByLabel", () => {
  it("should return `unique`", () => {
    const result = getAttributionClassIdByLabel("Unique")
    expect(result).toEqual(["unique"])
  })

  it("should return `limited edition`", () => {
    const result = getAttributionClassIdByLabel("Limited Edition")
    expect(result).toEqual(["limited edition"])
  })

  it("should return `open edition`", () => {
    const result = getAttributionClassIdByLabel("Open Edition")
    expect(result).toEqual(["open edition"])
  })

  it("should return `unknown edition`", () => {
    const result = getAttributionClassIdByLabel("Unknown Edition")
    expect(result).toEqual(["unknown edition"])
  })

  describe("Different cases", () => {
    it("should return correct value when all letters are lowercase", () => {
      const result = getAttributionClassIdByLabel("unknown edition")
      expect(result).toEqual(["unknown edition"])
    })

    it("should return correct value when all letters are uppercase", () => {
      const result = getAttributionClassIdByLabel("UNKNOWN EDITION")
      expect(result).toEqual(["unknown edition"])
    })

    it("should return correct value when all letters are different case", () => {
      expect(getAttributionClassIdByLabel("Unknown Edition")).toEqual([
        "unknown edition",
      ])

      expect(getAttributionClassIdByLabel("UnKnOwN EdItIoN")).toEqual([
        "unknown edition",
      ])
    })
  })
})

const Artwork = {
  title: "Some artwork title",
  slug: "artwork-slug",
  internalID: "artwork-id",
  artists: [
    {
      internalID: "4dd1584de0091e000100207c",
      name: "Banksy",
      slug: "banksy",
    },
  ],
  attributionClass: {
    name: "Limited edition",
  },
}

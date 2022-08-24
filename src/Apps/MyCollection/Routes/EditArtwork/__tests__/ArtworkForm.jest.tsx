import { fireEvent, render, screen } from "@testing-library/react"
import { flushPromiseQueue, MockBoot } from "DevTools"
import { setupTestWrapperTL } from "DevTools/setupTestWrapper"
import { graphql } from "relay-runtime"
import { Breakpoint } from "Utils/Responsive"
import { MyCollectionArtworkForm_artwork } from "__generated__/MyCollectionArtworkForm_artwork.graphql"
import {
  MyCollectionArtworkForm,
  MyCollectionArtworkFormFragmentContainer,
} from "../MyCollectionArtworkForm"

const mockRouterPush = jest.fn()
const mockRouterReplace = jest.fn()
const mockSubmitArtwork = jest.fn().mockResolvedValue({
  myCollectionUpdateArtwork: {
    artworkOrError: { artwork: { internalID: "internal-id" } },
  },
})

jest.mock("System/Router/useRouter", () => ({
  useRouter: jest.fn(() => ({
    router: { push: mockRouterPush, replace: mockRouterReplace },
  })),
}))
jest.mock("Utils/Hooks/useMatchMedia", () => ({
  __internal__useMatchMedia: () => false,
}))
jest.mock("../Mutations/useUpdateArtwork", () => ({
  ...jest.requireActual("../Mutations/useUpdateArtwork"),
  useUpdateArtwork: jest.fn(() => ({
    submitMutation: mockSubmitArtwork,
  })),
}))
jest.unmock("react-relay")

describe("Edit artwork", () => {
  const getWrapper = (breakpoint: Breakpoint = "lg") =>
    setupTestWrapperTL({
      Component: (props: any) => {
        return (
          <MockBoot breakpoint={breakpoint}>
            <MyCollectionArtworkFormFragmentContainer {...props} />
          </MockBoot>
        )
      },
      query: graphql`
        query ArtworkFormTest_Query($slug: String!) {
          artwork(id: $slug) {
            ...MyCollectionArtworkForm_artwork
          }
        }
      `,
      variables: {
        slug: mockArtwork.internalID,
      },
    })

  describe("Initial render", () => {
    it("populates inputs with values from the artwork", async () => {
      getWrapper().renderWithRelay({ Artwork: () => mockArtwork })

      expect(screen.getByText("Save Artwork")).toBeInTheDocument()
      expect(screen.getByTestId("save-button")).toBeEnabled()

      expect(screen.getByText("Add Artwork Details")).toBeInTheDocument()

      expect(screen.getByPlaceholderText("Enter full name")).toHaveValue(
        "Willem de Kooning"
      )
      expect(screen.getByPlaceholderText("YYYY")).toHaveValue("1975")
      expect(screen.getByPlaceholderText("Title")).toHaveValue("Untitled")
      expect(
        screen.getByPlaceholderText("Oil on Canvas, Mixed Media, Lithograph…")
      ).toHaveValue("Charcoal on paper")
      expect(
        screen
          .getAllByRole("combobox")
          .find(c => c.getAttribute("name") == "category")
      ).toHaveValue("Drawing, Collage or other Work on Paper")
      expect(
        screen
          .getAllByRole("combobox")
          .find(c => c.getAttribute("name") == "attributionClass")
      ).toHaveValue("LIMITED_EDITION")
      expect(screen.getByPlaceholderText("Your work's #")).toHaveValue("1")
      expect(screen.getByPlaceholderText("Total # in edition")).toHaveValue("2")
      expect(
        screen
          .getAllByRole("textbox")
          .find(c => c.getAttribute("name") == "height")
      ).toHaveValue("8.75")
      expect(
        screen
          .getAllByRole("textbox")
          .find(c => c.getAttribute("name") == "width")
      ).toHaveValue("11")
      expect(
        screen
          .getAllByRole("textbox")
          .find(c => c.getAttribute("name") == "depth")
      ).toHaveValue("2")
      expect(
        screen.getAllByRole("radio").find(c => c.textContent == "in")
      ).toBeChecked()
      expect(
        screen.getByPlaceholderText("Describe how you acquired the work")
      ).toHaveValue("Fooo")
      expect(
        screen.getByPlaceholderText("City where artwork is located")
      ).toHaveValue("Berlin")
    })
  })

  describe("Back Link behavior", () => {
    it("opens modal on press", async () => {
      getWrapper().renderWithRelay({
        Artwork: () => mockArtwork,
      })

      fireEvent.click(screen.getByText("Back"))

      expect(screen.getByTestId("leave-button")).toHaveAttribute(
        "href",
        `/my-collection/artwork/${mockArtwork.internalID}`
      )
    })
  })

  describe("With valid values", () => {
    it("enables save button", () => {
      getWrapper().renderWithRelay({
        Artwork: () => mockArtwork,
      })
      expect(screen.getByTestId("save-button")).toBeEnabled()
    })
  })

  describe("With invalid values", () => {
    it("disables save button", () => {
      getWrapper().renderWithRelay({
        Artwork: () => ({
          ...mockArtwork,
          title: "",
        }),
      })
      expect(screen.getByTestId("save-button")).toBeDisabled()
    })
  })

  describe("Form submit", () => {
    it("saves the artwork and navigates to artwork detail page", async () => {
      getWrapper().renderWithRelay({
        Artwork: () => mockArtwork,
      })

      fireEvent.click(screen.getByText("Save Artwork"))

      await flushPromiseQueue()

      expect(mockSubmitArtwork).toHaveBeenCalledWith(
        expect.objectContaining({
          rejectIf: expect.any(Function),
          variables: {
            input: {
              artistIds: ["4d8b929e4eb68a1b2c0002f2"],
              artworkId: "62fc96c48d3ff8000b556c3a",
              artworkLocation: "Berlin",
              attributionClass: "LIMITED_EDITION",
              category: "Drawing, Collage or other Work on Paper",
              date: "1975",
              depth: "2",
              editionNumber: "1",
              editionSize: "2",
              height: "8.75",
              medium: "Charcoal on paper",
              metric: "in",
              pricePaidCents: 400000,
              pricePaidCurrency: "EUR",
              provenance: "Fooo",
              title: "Untitled",
              width: "11",
            },
          },
        })
      )

      expect(mockRouterPush).toHaveBeenCalledWith({
        pathname: "/my-collection/artwork/internal-id",
      })
    })
  })
})

describe("Create artwork", () => {
  const getWrapper = (breakpoint: Breakpoint = "lg") => {
    render(
      <MockBoot breakpoint={breakpoint}>
        <MyCollectionArtworkForm />
      </MockBoot>
    )
  }

  describe("Initial render", () => {
    it("doesn't populate inputs", async () => {
      getWrapper()

      expect(screen.getByText("Upload Artwork")).toBeInTheDocument()
      expect(screen.getByTestId("save-button")).toBeDisabled()

      expect(screen.getByText("Add Artwork Details")).toBeInTheDocument()

      expect(screen.getByPlaceholderText("Enter full name")).toHaveValue("")
    })
  })

  describe("Back Link behavior", () => {
    it("opens modal on press", async () => {
      getWrapper()

      fireEvent.click(screen.getByText("Back"))

      expect(screen.getByTestId("leave-button")).toHaveAttribute(
        "href",
        "/my-collection"
      )
    })
  })
})

const mockArtwork = {
  artist: {
    internalID: "4d8b929e4eb68a1b2c0002f2",
    name: "Willem de Kooning",
    formattedNationalityAndBirthday: "Dutch-American, 1904–1997",
    targetSupply: {
      isP1: true,
    },
  },
  consignmentSubmission: null,
  artistNames: "Willem de Kooning",
  category: "Drawing, Collage or other Work on Paper",
  pricePaid: {
    display: "€4,000",
    minor: 400000,
    currencyCode: "EUR",
  },
  date: "1975",
  depth: "2",
  dimensions: {
    in: "8 3/4 × 11 × 2 in",
    cm: "22.2 × 27.9 × 5.1 cm",
  },
  editionSize: "2",
  editionNumber: "1",
  height: "8.75",
  attributionClass: {
    name: "Limited edition",
  },
  id: "QXJ0d29yazo2MmZjOTZjNDhkM2ZmODAwMGI1NTZjM2E=",
  images: [
    {
      isDefault: true,
      imageURL:
        "https://d2v80f5yrouhh2.cloudfront.net/FV2gbZ1UDy7Y5qTZSv-Gwg/:version.jpg",
      width: 640,
      height: 501,
      internalID: "62fc96c4aa88f0000d053af7",
    },
  ],
  internalID: "62fc96c48d3ff8000b556c3a",
  isEdition: true,
  medium: "Charcoal on paper",
  metric: "in",
  artworkLocation: "Berlin",
  provenance: "Fooo",
  slug: "62fc96c48d3ff8000b556c3a",
  title: "Untitled",
  width: "11",
  " $refType": "MyCollectionArtworkForm_artwork",
} as MyCollectionArtworkForm_artwork
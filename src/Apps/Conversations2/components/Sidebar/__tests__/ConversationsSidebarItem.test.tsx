import { graphql } from "relay-runtime"
import { fireEvent, screen } from "@testing-library/react"
import { setupTestWrapperTL } from "DevTools/setupTestWrapper"
import { ConversationsSidebarItem } from "Apps/Conversations2/components/Sidebar/ConversationsSidebarItem"
import { ConversationsSidebarItemTestQuery } from "__generated__/ConversationsSidebarItemTestQuery.graphql"
import { useTracking } from "react-tracking"

jest.mock("next/router", () => require("next-router-mock"))

jest.mock("react-tracking")

describe("ConversationSidebarItem", () => {
  const mockTracking = useTracking as jest.Mock
  const trackEvent = jest.fn()

  const { renderWithRelay } = setupTestWrapperTL<
    ConversationsSidebarItemTestQuery
  >({
    Component: ({ conversation }) => (
      <ConversationsSidebarItem conversation={conversation!} index={2} />
    ),
    query: graphql`
      query ConversationsSidebarItemTestQuery @relay_test_operation {
        conversation(id: "conversation-id") {
          ...ConversationsSidebarItem_conversation
        }
      }
    `,
  })

  beforeEach(() => {
    mockTracking.mockImplementation(() => ({ trackEvent }))
  })

  it("renders", () => {
    renderWithRelay({
      Conversation: () => ({
        internalID: "conversation-id",
        from: { name: "Lidiane Taquehara" },
        lastMessageAt: "Dec 07",
        unread: false,
        fromUser: {
          collectorProfile: {
            confirmedBuyerAt: "2022-12-07T21:03:20+00:00",
          },
        },
      }),
      CommerceOrderConnectionWithTotalCount: () => ({
        edges: null,
      }),
      ConversationItemType: () => ({
        __typename: "Artwork",
        title: "Demo title",
        date: "2022",
        artist: { name: "Edgar the doggo" },
        image: {
          url: "https://imamges.com/img.png",
        },
      }),
    })

    expect(screen.getByText("Lidiane Taquehara")).toBeInTheDocument()
    expect(screen.getByTestId("user-verified-icon")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://imamges.com/img.png"
    )
    expect(screen.getByText("Edgar the doggo")).toBeInTheDocument()
    expect(screen.getByText("Demo title")).toBeInTheDocument()
    expect(screen.getByText(", 2022")).toBeInTheDocument()
    expect(screen.getByText("Dec 07")).toBeInTheDocument()
    expect(screen.getByText("Inquiry")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "conversation-id")
  })

  it("renders unread icon", () => {
    renderWithRelay({
      Conversation: () => ({
        unread: true,
      }),
    })

    // TODO: once we fix unread, uncomment line below
    // expect(screen.getByTestId("unread-dot")).toBeInTheDocument()
  })

  it("shows Order text", () => {
    renderWithRelay({
      CommerceOrder: () => ({
        __typename: "CommerceBuyOrder",
      }),
    })

    expect(screen.getByText("Order")).toBeInTheDocument()
  })

  it("shows Offer text", () => {
    renderWithRelay({
      CommerceOrder: () => ({
        __typename: "CommerceOfferOrder",
      }),
    })

    expect(screen.getByText("Offer")).toBeInTheDocument()
  })

  it("renders component when info is missing", () => {
    renderWithRelay({
      Conversation: () => ({
        internalID: "conversation-id",
        from: { name: null },
        lastMessageAt: null,
        unread: false,
        fromUser: {
          collectorProfile: {
            confirmedBuyerAt: null,
          },
        },
      }),
      CommerceOrderConnectionWithTotalCount: () => ({
        edges: null,
      }),
      ConversationItemType: () => ({
        __typename: "Artwork",
        title: "",
        date: null,
        artist: { name: "" },
        image: {
          url: "",
        },
      }),
    })

    expect(screen.getByRole("link")).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("tracks click", () => {
    renderWithRelay({
      ConversationItemType: () => ({ id: "mocked-artwork-id" }),
    })

    fireEvent.click(screen.getByRole("link"))

    expect(trackEvent).toHaveBeenCalledTimes(1)
    expect(trackEvent.mock.calls[0][0]).toMatchObject({
      action: "Click",
      label: "Selected inquiry",
      context_module: "conversations",
      artwork_id: "mocked-artwork-id",
    })
  })
})
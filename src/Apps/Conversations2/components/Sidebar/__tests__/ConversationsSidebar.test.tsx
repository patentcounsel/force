import { graphql } from "relay-runtime"
import { screen } from "@testing-library/react"
import { setupTestWrapperTL } from "DevTools/setupTestWrapper"
import { ConversationsSidebar } from "Apps/Conversations2/components/Sidebar/ConversationsSidebar"
import { ConversationsSidebarTestQuery } from "__generated__/ConversationsSidebarTestQuery.graphql"

describe("ConversationDetails", () => {
  const { renderWithRelay } = setupTestWrapperTL<ConversationsSidebarTestQuery>(
    {
      Component: ({ viewer }) => <ConversationsSidebar viewer={viewer!} />,
      query: graphql`
        query ConversationsSidebarTestQuery @relay_test_operation {
          viewer {
            ...ConversationsSidebar_viewer
          }
        }
      `,
    }
  )

  beforeEach(() => {
    jest.clearAllMocks()

    // FIXME
    // mockRouter.query = { conversationId: "123" }
  })

  it("renders", () => {
    renderWithRelay({
      ConversationConnection: () => ({
        edges: [
          {
            node: {
              internalID: "conversation-1",
              from: { name: "Collector 1" },
              lastMessageAt: "2022-12-02",
              unread: false,
            },
          },
        ],
      }),
    })

    expect(screen.getByText("Collector 1")).toBeInTheDocument()
    expect(screen.getByText("2022-12-02")).toBeInTheDocument()
  })

  it("renders empty message given no conversation", () => {
    renderWithRelay({
      ConversationConnection: () => ({
        edges: null,
      }),
    })

    expect(
      screen.getByText("All conversations with collectors will show here.")
    ).toBeInTheDocument()
  })
})
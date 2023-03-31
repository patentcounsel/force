import { render, screen } from "@testing-library/react"
import { ConversationsSidebarEmpty } from "Apps/Conversations2/components/Sidebar/ConversationsSidebarEmpty"

jest.mock("next/router", () => require("next-router-mock"))

describe("ConversationsSidebarEmpty", () => {
  it("renders given no filter", () => {
    render(<ConversationsSidebarEmpty />)

    expect(
      screen.getByText("All conversations with collectors will show here.")
    ).toBeInTheDocument()
  })

  it("renders given new_inquiries filter", () => {
    // FIXME
    // mockRouter.query = { conversationsFilter: "new_inquiries" }
    render(<ConversationsSidebarEmpty />)

    expect(
      screen.getByText("New inquiries and messages will show here.")
    ).toBeInTheDocument()
  })

  it("renders given replied filter", () => {
    // FIXME
    // mockRouter.query = { conversationsFilter: "replied" }
    render(<ConversationsSidebarEmpty />)

    expect(
      screen.getByText("Conversations you've replied to will show here.")
    ).toBeInTheDocument()
  })

  it("doesn't render given unsupported filter", () => {
    // FIXME
    // mockRouter.query = { conversationsFilter: "not_supported" }
    render(<ConversationsSidebarEmpty />)

    expect(screen.queryAllByText(/^[A-Za-z0-9_.]+$/g)).toStrictEqual([])
  })
})
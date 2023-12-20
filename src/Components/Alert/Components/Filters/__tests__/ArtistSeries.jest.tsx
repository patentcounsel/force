import { screen } from "@testing-library/react"
import { setupTestWrapperTL } from "DevTools/setupTestWrapper"
import { ArtistSeriesQueryRenderer } from "Components/Alert/Components/Filters/ArtistSeries"
import { flushPromiseQueue } from "DevTools/flushPromiseQueue"
import { ArtistSeriesOptionsQuery$data } from "__generated__/ArtistSeriesOptionsQuery.graphql"

jest.unmock("react-relay")

describe("ArtistSeries", () => {
  it("renders artist series options", async () => {
    const { renderWithRelay } = setupTestWrapperTL({
      Component: () => {
        return <ArtistSeriesQueryRenderer />
      },
    })

    renderWithRelay({
      FilterArtworksConnection: () => mockArtistSeries,
    })

    await flushPromiseQueue()

    expect(screen.getByText("Artist Series")).toBeInTheDocument()

    // FAILS currently
    expect(screen.getByText("Posters")).toBeInTheDocument()
  })
})

const mockArtistSeries: ArtistSeriesOptionsQuery$data = {
  artworksConnection: {
    aggregations: [
      {
        counts: [
          { count: 42, name: "Posters", value: "posters" },
          { count: 42, name: "Lithographs", value: "lithographs" },
          { count: 42, name: "Flowers", value: "flowers" },
          { count: 42, name: "Portraits", value: "portraits" },
          { count: 42, name: "Pools", value: "pools" },
          { count: 42, name: "Interiors", value: "interiors" },
          { count: 42, name: "Celia", value: "celia" },
          { count: 42, name: "A Bigger Book", value: "a-bigger-book" },
          { count: 42, name: "iPad Drawings", value: "ipad-drawings" },
          { count: 42, name: "The Blue Guitar", value: "the-blue-guitar" },
        ],
        slice: "ARTIST_SERIES",
      },
    ],
  },
}

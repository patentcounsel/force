import { FC } from "react"
import {
  RelayPaginationProp,
  createPaginationContainer,
  graphql,
} from "react-relay"
import { ArtistsSearchResultsList_viewer$data } from "__generated__/ArtistsSearchResultsList_viewer.graphql"
import { extractNodes } from "Utils/extractNodes"
import { Flex, Spinner } from "@artsy/palette"
import {
  SearchNodeOption,
  formatOptions,
} from "Components/Search/utils/formatOptions"
import { InfiniteScrollSentinel } from "Components/InfiniteScrollSentinel"
import { ArtistSearchItem } from "Components/Alert/Components/ArtistSearchItem"

interface ArtistsSearchResultsListProps {
  relay: RelayPaginationProp
  viewer: ArtistsSearchResultsList_viewer$data
  query: string
}

const ENTITIES_PER_SCROLL = 10

const ArtistsSearchResultsList: FC<ArtistsSearchResultsListProps> = ({
  relay,
  viewer,
  query,
}) => {
  console.log("[Debug] query", query)

  if (!viewer.searchConnection) {
    // TODO: Add a placeholder
    console.log("[Debug] viewer.searchConnection is null")
    return null
  }

  const options = extractNodes(viewer.searchConnection)

  const formattedOptions = formatOptions(
    options.map(option => {
      return {
        ...option,
        imageUrl: option.coverArtwork?.image?.src || option.imageUrl,
      }
    }) as SearchNodeOption[]
  )

  if (formattedOptions.length === 0) {
    // TODO: Add no results placeholder
    return null
  }

  const handleLoadMore = () => {
    if (!relay.hasMore() || relay.isLoading()) {
      return
    }

    relay.loadMore(ENTITIES_PER_SCROLL, err => {
      if (err) {
        console.error(err)
      }
    })
  }

  const handleOptionClick = option => {
    console.log("[Debug] click on option", option)
  }

  return (
    <>
      {formattedOptions.map((option, index) => {
        return (
          <ArtistSearchItem
            option={option}
            query={query}
            onClick={handleOptionClick}
            key={index}
          />
        )
      })}

      {relay.hasMore() && (
        <>
          <InfiniteScrollSentinel onNext={handleLoadMore} once={false} />

          <Flex width="100%" my={4} alignItems="center">
            <Spinner position="relative" />
          </Flex>
        </>
      )}
    </>
  )
}

export const ArtistsSearchResultsListPaginationContainer = createPaginationContainer(
  ArtistsSearchResultsList,
  {
    viewer: graphql`
      fragment ArtistsSearchResultsList_viewer on Viewer
        @argumentDefinitions(
          first: { type: "Int", defaultValue: 10 }
          after: { type: "String" }
          term: { type: "String!", defaultValue: "" }
        ) {
        searchConnection(
          query: $term
          entities: [ARTIST]
          mode: AUTOSUGGEST
          first: $first
          after: $after
        ) @connection(key: "ArtistsSearchResultsList_searchConnection") {
          edges {
            node {
              displayLabel
              href
              imageUrl
              __typename
              ... on SearchableItem {
                displayType
                slug
              }
              ... on Artist {
                statuses {
                  artworks
                  auctionLots
                }
                coverArtwork {
                  image {
                    src: url(version: ["small"])
                  }
                }
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.viewer.searchConnection
    },
    getFragmentVariables(prevVars, totalCount) {
      return { ...prevVars, count: totalCount }
    },
    getVariables(_, { count, cursor }, fragmentVariables) {
      return {
        first: count,
        after: cursor,
        term: fragmentVariables.term,
      }
    },
    query: graphql`
      query ArtistsSearchResultsListPaginationQuery(
        $after: String
        $term: String!
      ) {
        viewer {
          ...ArtistsSearchResultsList_viewer
            @arguments(term: $term, after: $after)
        }
      }
    `,
  }
)

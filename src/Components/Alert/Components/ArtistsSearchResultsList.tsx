import { FC } from "react"
import {
  RelayPaginationProp,
  createPaginationContainer,
  graphql,
} from "react-relay"
import { ArtistsSearchResultsList_viewer$data } from "__generated__/ArtistsSearchResultsList_viewer.graphql"
import { extractNodes } from "Utils/extractNodes"
import { Flex, Spinner } from "@artsy/palette"
import { InfiniteScrollSentinel } from "Components/InfiniteScrollSentinel"
import { ArtistSearchItem } from "Components/Alert/Components/ArtistSearchItem"
import { useAlertContext } from "Components/Alert/Hooks/useAlertContext"

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
  const { state, dispatch } = useAlertContext()

  if (!viewer.searchConnection) {
    // TODO: Add a placeholder
    return null
  }

  const options = extractNodes(viewer.searchConnection)

  const formattedOptions = options.map((option, index) => {
    return {
      text: option.displayLabel,
      value: option.displayLabel,
      subtitle: option.formattedNationalityAndBirthday,
      imageUrl: option.coverArtwork?.image?.src || option.imageUrl,
      slug: option.slug,
    }
  })

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
    const artistIDs = [...(state.criteria?.artistIDs ?? []), ...[option.slug]]

    dispatch({
      type: "SET_CRITERIA_ATTRIBUTE",
      payload: { key: "artistIDs", value: artistIDs },
    })
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
              ... on Artist {
                formattedNationalityAndBirthday
                slug
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

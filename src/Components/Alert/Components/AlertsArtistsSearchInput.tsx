import { Input, Spacer } from "@artsy/palette"
import { ArtistsSearchResultsListPaginationContainer } from "Components/Alert/Components/ArtistsSearchResultsList"
import { SEARCH_DEBOUNCE_DELAY } from "Components/Search/constants"
import { shouldStartSearching } from "Components/Search/utils/shouldStartSearching"
import { useDebounce } from "Utils/Hooks/useDebounce"
import { FC, useCallback, useState } from "react"
import { RelayRefetchProp, createRefetchContainer, graphql } from "react-relay"
import { AlertsArtistsSearchInput_viewer$data } from "__generated__/AlertsArtistsSearchInput_viewer.graphql"

interface AlertsArtistsSearchInputProps {
  viewer: AlertsArtistsSearchInput_viewer$data
  relay: RelayRefetchProp
}

export const AlertsArtistsSearchInput: FC<AlertsArtistsSearchInputProps> = ({
  viewer,
  relay,
}) => {
  const [inputValue, setInputValue] = useState("")

  const refetch = useCallback(
    (value: string) => {
      relay.refetch(
        {
          hasTerm: true,
          term: value,
        },
        null,
        error => {
          if (error) {
            // logger.error(error)
            return
          }
        }
      )
    },
    [relay]
  )

  const debouncedSearchRequest = useDebounce({
    callback: refetch,
    delay: SEARCH_DEBOUNCE_DELAY,
  })

  const handleValueChange = event => {
    const value = event.target.value
    setInputValue(value)

    if (shouldStartSearching(value)) {
      debouncedSearchRequest(value)
    }
  }

  return (
    <>
      <Input
        title="Search by artist, e.g. Banksy or Damien Hirst"
        name="artists"
        placeholder={"Search by artist, e.g. Banksy or Damien Hirst"}
        value={inputValue}
        onChange={handleValueChange}
      />

      <Spacer y={1} />

      {shouldStartSearching(inputValue) && (
        <ArtistsSearchResultsListPaginationContainer
          viewer={viewer}
          query={inputValue}
        />
      )}
    </>
  )
}

export const AlertsArtistsSearchInputRefetchContainer = createRefetchContainer(
  AlertsArtistsSearchInput,
  {
    viewer: graphql`
      fragment AlertsArtistsSearchInput_viewer on Viewer
        @argumentDefinitions(
          term: { type: "String!", defaultValue: "" }
          hasTerm: { type: "Boolean!", defaultValue: false }
        ) {
        ...ArtistsSearchResultsList_viewer
          @arguments(term: $term)
          @include(if: $hasTerm)
      }
    `,
  },
  graphql`
    query AlertsArtistsSearchInputRefetchQuery(
      $term: String!
      $hasTerm: Boolean!
    ) {
      viewer {
        ...AlertsArtistsSearchInput_viewer
          @arguments(term: $term, hasTerm: $hasTerm)
      }
    }
  `
)

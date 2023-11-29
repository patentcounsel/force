import { Input } from "@artsy/palette"
import { FC } from "react"
import { graphql } from "react-relay"
import { useSystemContext } from "System/SystemContext"
import { isServer } from "Server/isServer"
import { SystemQueryRenderer } from "System/Relay/SystemQueryRenderer"
import { StaticSearchContainer } from "Components/Search/StaticSearchContainer"
import { AlertsArtistsSearchInputRefetchContainer } from "Components/Alert/Components/AlertsArtistsSearchInput"
import {
  AlertsArtistsSearchQuery,
  AlertsArtistsSearchQuery$data,
} from "__generated__/AlertsArtistsSearchQuery.graphql"

interface AlertsArtistsSearchProps {
  viewer: NonNullable<AlertsArtistsSearchQuery$data["viewer"]>
}

export const AlertsArtistsSearch: FC<AlertsArtistsSearchProps> = ({
  viewer,
}) => {
  return <AlertsArtistsSearchInputRefetchContainer viewer={viewer} />
}

export const AlertsArtistsSearchQueryRenderer: FC = props => {
  const { relayEnvironment, searchQuery = "" } = useSystemContext()

  if (isServer) {
    ;<Input
      title="Search by artist, e.g. Banksy or Damien Hirst"
      name="artists"
      placeholder={"Search by artist, e.g. Banksy or Damien Hirst"}
    />
  }

  return (
    <SystemQueryRenderer<AlertsArtistsSearchQuery>
      environment={relayEnvironment}
      query={graphql`
        query AlertsArtistsSearchQuery($term: String!, $hasTerm: Boolean!) {
          viewer {
            ...AlertsArtistsSearchInput_viewer
              @arguments(term: $term, hasTerm: $hasTerm)
          }
        }
      `}
      variables={{
        hasTerm: false,
        term: "",
      }}
      render={({ props: relayProps }) => {
        if (relayProps?.viewer) {
          return <AlertsArtistsSearch viewer={relayProps.viewer} {...props} />
          // SSR render pass. Since we don't have access to `<Boot>` context
          // from within the NavBar (it's not a part of any app) we need to lean
          // on styled-system for showing / hiding depending upon breakpoint.
        } else {
          return <StaticSearchContainer searchQuery={searchQuery} />
        }
      }}
    />
  )
}

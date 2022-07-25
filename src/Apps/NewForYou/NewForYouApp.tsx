import React, { FC } from "react"
import { MetaTags } from "Components/MetaTags"
import { Message, Spacer, Text } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { NewForYouApp_viewer } from "__generated__/NewForYouApp_viewer.graphql"
import { NewForYouArtworksGridFragmentContainer } from "Apps/NewForYou/Components/NewForYouArtworksGrid"
import { RouterLink } from "System/Router/RouterLink"
import { useSystemContext } from "System"
import { useRouter } from "System/Router/useRouter"

interface NewForYouAppProps {
  viewer: NewForYouApp_viewer
}

export const NewForYouApp: FC<NewForYouAppProps> = ({ viewer }) => {
  const { isLoggedIn } = useSystemContext()
  const { route } = useRouter()

  return (
    <>
      <Spacer mt={2} />
      <MetaTags title="New For You" />
      <Text variant="xl" mt={4}>
        New Works For You
      </Text>
      <Spacer mt={4} />
      {!isLoggedIn && (
        <>
          <Message variant="warning">
            Already have an account?{" "}
            <RouterLink to={`/login?redirectTo=${route.path}`}>
              Log in
            </RouterLink>{" "}
            to see your personalized recommendations.
          </Message>
          <Spacer mt={4} />
        </>
      )}
      {viewer && <NewForYouArtworksGridFragmentContainer viewer={viewer} />}
    </>
  )
}

export const NewForYouAppFragmentContainer = createFragmentContainer(
  NewForYouApp,
  {
    viewer: graphql`
      fragment NewForYouApp_viewer on Viewer
        @argumentDefinitions(
          first: { type: "Int" }
          includeBackfill: { type: "Boolean!" }
          version: { type: "String" }
        ) {
        ...NewForYouArtworksGrid_viewer
          @arguments(
            first: $first
            includeBackfill: $includeBackfill
            version: $version
          )
      }
    `,
  }
)
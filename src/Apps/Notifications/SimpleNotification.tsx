import { Text } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { SystemQueryRenderer } from "System/Relay/SystemQueryRenderer"
import { SimpleNotificationQuery } from "__generated__/SimpleNotificationQuery.graphql"
import { SimpleNotificationAlert_me$data } from "__generated__/SimpleNotificationAlert_me.graphql"
import { SimpleNotificationArtworkPublished_me$data } from "__generated__/SimpleNotificationArtworkPublished_me.graphql"

// // // // // // // // //
// ALERT NOTIFICATION// //
// // // // // // // // //

const AlertNotification: React.FC<{
  me: SimpleNotificationAlert_me$data
}> = ({ me }) => {
  const type = me?.notification?.notificationType
  const alert = me?.notification?.content?.alert

  return (
    <>
      <Text>{type}</Text>
      <Text>{alert?.attributionClass}</Text>
    </>
  )
}

const AlertNotificationFragmentContainer = createFragmentContainer(
  AlertNotification,
  {
    me: graphql`
      fragment SimpleNotificationAlert_me on Me
        @argumentDefinitions(id: { type: "String!" }) {
        notification(id: $id) {
          notificationType
          content {
            ... on AlertNotificationContent {
              alert {
                attributionClass
              }
            }
          }
        }
      }
    `,
  }
)

// // // // // // // // // // // // //
// ALTWORK PUBLISHED NOTIFICATION // //
// // // // // // // // // // // // //

const ArtworkPublishedNotification: React.FC<{
  me: SimpleNotificationArtworkPublished_me$data
}> = ({ me }) => {
  const type = me?.notification?.notificationType
  const artist = me?.notification?.content?.artists?.[0]

  return (
    <>
      <Text>{type}</Text>
      <Text>{artist?.name}</Text>
    </>
  )
}

const ArtworkPublishedNotificationFragmentContainer = createFragmentContainer(
  ArtworkPublishedNotification,
  {
    me: graphql`
      fragment SimpleNotificationArtworkPublished_me on Me
        @argumentDefinitions(id: { type: "String!" }) {
        notification(id: $id) {
          notificationType
          content {
            ... on ArtworkPublishedNotificationContent {
              artists {
                name
              }
            }
          }
        }
      }
    `,
  }
)

// // // // // // // // // // // // //
// QUERY RENDERER // //
// // // // // // // // // // // // //

export const SimpleNotificationQueryRenderer: React.FC<{
  id: string
}> = ({ id }) => {
  return (
    <SystemQueryRenderer<SimpleNotificationQuery>
      query={graphql`
        query SimpleNotificationQuery($id: String!) {
          me {
            notification(id: $id) {
              notificationType
            }

            ...SimpleNotificationAlert_me @arguments(id: $id)
            ...SimpleNotificationArtworkPublished_me @arguments(id: $id)
          }
        }
      `}
      variables={{
        id,
      }}
      cacheConfig={{ force: true }}
      render={({ props }) => {
        if (props?.me) {
          switch (props.me.notification?.notificationType) {
            case "ARTWORK_ALERT":
              return <AlertNotificationFragmentContainer me={props.me} />
            case "ARTWORK_PUBLISHED":
              return (
                <ArtworkPublishedNotificationFragmentContainer me={props.me} />
              )
            default:
              return null
          }
        }
      }}
    />
  )
}

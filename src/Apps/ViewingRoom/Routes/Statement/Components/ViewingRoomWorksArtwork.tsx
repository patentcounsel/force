import { Image, ResponsiveBox, Text } from "@artsy/palette"
import * as React from "react"
import { createFragmentContainer } from "react-relay"
import { useTracking } from "react-tracking"
import { graphql } from "react-relay"
import * as DeprecatedAnalyticsSchema from "@artsy/cohesion/dist/DeprecatedSchema"
import { RouterLink } from "System/Router/RouterLink"
import { useScrollToElement } from "Utils/Hooks/useScrollTo"
import { ViewingRoomWorksArtwork_artwork$data } from "__generated__/ViewingRoomWorksArtwork_artwork.graphql"

interface ViewingRoomWorksArtworkProps {
  to: string
  artwork: ViewingRoomWorksArtwork_artwork$data
}

const ViewingRoomWorksArtwork: React.FC<ViewingRoomWorksArtworkProps> = ({
  to,
  artwork,
}) => {
  const tracking = useTracking()

  const { scrollTo } = useScrollToElement({
    selectorOrRef: "#scrollTo--ViewingRoomTabBar",
    offset: 20,
    behavior: "smooth",
  })

  const image = artwork.image?.resized

  return (
    <RouterLink
      to={to}
      textDecoration="none"
      display="block"
      width="100%"
      onClick={() => {
        scrollTo()

        tracking.trackEvent({
          action_type: DeprecatedAnalyticsSchema.ActionType.ClickedArtworkGroup,
          context_module:
            DeprecatedAnalyticsSchema.ContextModule.ViewingRoomArtworkRail,
          subject: DeprecatedAnalyticsSchema.Subject.ArtworkThumbnail,
          destination_path: to,
        })
      }}
    >
      {image && (
        <ResponsiveBox
          aspectWidth={image.width ?? 1}
          aspectHeight={image.height ?? 1}
          maxWidth="100%"
        >
          <Image
            width="100%"
            height="100%"
            src={image.src}
            srcSet={image.srcSet}
            alt=""
            lazyLoad
            style={{ display: "block" }}
          />
        </ResponsiveBox>
      )}

      <Text variant="sm-display" mt={1}>
        {artwork.artistNames}
      </Text>

      <Text variant="sm-display" color="black60" overflowEllipsis>
        {[artwork.title, artwork.date].filter(s => s).join(", ")}
      </Text>

      {artwork.saleMessage && (
        <Text variant="sm-display" color="black60">
          {artwork.saleMessage}
        </Text>
      )}
    </RouterLink>
  )
}

export const ViewingRoomWorksArtworkFragmentContainer = createFragmentContainer(
  ViewingRoomWorksArtwork,
  {
    artwork: graphql`
      fragment ViewingRoomWorksArtwork_artwork on Artwork {
        artistNames
        date
        saleMessage
        title
        image {
          resized(width: 445) {
            src
            srcSet
            width
            height
          }
        }
      }
    `,
  }
)

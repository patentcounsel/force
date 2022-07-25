import { createFragmentContainer, graphql } from "react-relay"
import { ShelfArtworkFragmentContainer } from "Components/Artwork/ShelfArtwork"
import { Rail } from "Components/Rail"
import { extractNodes } from "Utils/extractNodes"
import { AuctionWorksByFollowedArtistsRail_viewer } from "__generated__/AuctionWorksByFollowedArtistsRail_viewer.graphql"

interface AuctionWorksByFollowedArtistsRailProps {
  viewer: AuctionWorksByFollowedArtistsRail_viewer
}

const AuctionWorksByFollowedArtistsRail: React.FC<AuctionWorksByFollowedArtistsRailProps> = ({
  viewer,
}) => {
  const nodes = extractNodes(viewer.saleArtworksConnection)

  if (nodes.length === 0) {
    return null
  }

  return (
    <>
      <Rail
        title="Works By Artists You Follow"
        viewAllOnClick={() => {
          // TODO
          // Track works by artists you follow click
        }}
        getItems={() => {
          return nodes.map((node, index) => {
            return (
              <ShelfArtworkFragmentContainer
                artwork={node}
                key={index}
                lazyLoad
              />
            )
          })
        }}
      />
    </>
  )
}

export const AuctionWorksByFollowedArtistsRailFragmentContainer = createFragmentContainer(
  AuctionWorksByFollowedArtistsRail,
  {
    viewer: graphql`
      fragment AuctionWorksByFollowedArtistsRail_viewer on Viewer
        @argumentDefinitions(saleID: { type: "String" }) {
        saleArtworksConnection(
          first: 99
          aggregations: [TOTAL]
          saleSlug: $saleID
          includeArtworksByFollowedArtists: true
        ) {
          edges {
            node {
              ...ShelfArtwork_artwork
            }
          }
        }
      }
    `,
  }
)
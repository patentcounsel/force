import { Box, Spacer, Join, Separator } from "@artsy/palette"
import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtworkSidebarArtistsFragmentContainer } from "./ArtworkSidebarArtists"
import { ArtworkSidebarAuctionPartnerInfoFragmentContainer } from "./ArtworkSidebarAuctionPartnerInfo"
import { ArtworkSidebarCommercialFragmentContainer } from "./ArtworkSidebarCommercial"
import { ArtworkSidebarMetadataFragmentContainer } from "./ArtworkSidebarMetadata"
import { ArtworkSidebarPartnerInfoFragmentContainer } from "./ArtworkSidebarPartnerInfo"
import { ContextModule } from "@artsy/cohesion"
import { ArtworkSidebar_artwork$data } from "__generated__/ArtworkSidebar_artwork.graphql"
import { ArtworkSidebar_me$data } from "__generated__/ArtworkSidebar_me.graphql"
import { AuthenticityCertificateFragmentContainer } from "Apps/Artwork/Components/TrustSignals/AuthenticityCertificate"
import { SecurePaymentFragmentContainer } from "Apps/Artwork/Components/TrustSignals/SecurePayment"
import { VerifiedSellerFragmentContainer } from "Apps/Artwork/Components/TrustSignals/VerifiedSeller"
import { BuyerGuaranteeFragmentContainer } from "Apps/Artwork/Components/TrustSignals/BuyerGuarantee"
import { ArtworkSidebarExtraLinksFragmentContainer } from "./ArtworkSidebarExtraLinks"
import { ArtworkSidebarAuctionPollingRefetchContainer } from "./ArtworkSidebarAuctionInfoPolling"
import { CreateArtworkAlertSectionFragmentContainer } from "./CreateArtworkAlertSection"
import { ArtworkSidebarAuctionTimerFragmentContainer } from "./ArtworkSidebarAuctionTimer"
import { useTimer } from "Utils/Hooks/useTimer"
import { ArtworkSidebarBiddingClosedMessageFragmentContainer } from "./ArtworkSidebarBiddingClosedMessage"
import { lotIsClosed } from "Apps/Artwork/Utils/lotIsClosed"
import {
  shouldRenderBuyerGuaranteeAndSecurePayment,
  shouldRenderVerifiedSeller,
} from "Apps/Artwork/Utils/badges"
import { useAuctionWebsocket } from "Components/useAuctionWebsocket"

export interface ArtworkSidebarProps {
  artwork: ArtworkSidebar_artwork$data
  me: ArtworkSidebar_me$data
}

const ArtworkSidebarContainer = Box

export const ArtworkSidebar: React.FC<ArtworkSidebarProps> = ({
  artwork,
  me,
}) => {
  // If we have info about the lot end time (cascading), use that.
  const { sale, saleArtwork, is_sold, is_in_auction } = artwork
  const endAt = saleArtwork?.endAt
  const extendedBiddingEndAt = saleArtwork?.extendedBiddingEndAt
  const biddingEndAt = extendedBiddingEndAt ?? endAt

  const startAt = sale?.startAt

  const shouldRenderArtworkBadges =
    shouldRenderVerifiedSeller(artwork) ||
    shouldRenderBuyerGuaranteeAndSecurePayment(artwork)

  const [updatedBiddingEndAt, setUpdatedBiddingEndAt] = React.useState(
    biddingEndAt
  )

  useAuctionWebsocket({
    lotID: saleArtwork?.lotID!,
    onChange: ({ extended_bidding_end_at }) => {
      setUpdatedBiddingEndAt(extended_bidding_end_at)
    },
  })

  const { hasEnded } = useTimer(updatedBiddingEndAt!, startAt!)
  const shouldHideDetailsCreateAlertCTA =
    artwork.artists?.length === 0 ||
    (is_in_auction && hasEnded) ||
    (is_in_auction && lotIsClosed(sale, saleArtwork)) ||
    is_sold

  return (
    <ArtworkSidebarContainer data-test={ContextModule.artworkSidebar}>
      <ArtworkSidebarArtistsFragmentContainer artwork={artwork} />
      <Spacer mt={4} />

      <ArtworkSidebarMetadataFragmentContainer artwork={artwork} />

      <AuthenticityCertificateFragmentContainer artwork={artwork} />

      {is_in_auction ? (
        <>
          <Spacer mt={2} />
          <Join separator={<Spacer mt={2} />}>
            <ArtworkSidebarAuctionPartnerInfoFragmentContainer
              artwork={artwork}
            />
            {hasEnded ? (
              <ArtworkSidebarBiddingClosedMessageFragmentContainer
                artwork={artwork}
              />
            ) : (
              <ArtworkSidebarAuctionPollingRefetchContainer
                artwork={artwork}
                me={me}
              />
            )}
          </Join>

          {!hasEnded && (
            <ArtworkSidebarAuctionTimerFragmentContainer artwork={artwork} />
          )}
        </>
      ) : (
        <>
          <Spacer mt={2} />

          <ArtworkSidebarCommercialFragmentContainer artwork={artwork} />
        </>
      )}

      {shouldRenderArtworkBadges && (
        <Join separator={<Spacer mt={2} />}>
          <Separator mt={2} />

          <SecurePaymentFragmentContainer artwork={artwork} />

          <VerifiedSellerFragmentContainer artwork={artwork} />

          <BuyerGuaranteeFragmentContainer artwork={artwork} />
        </Join>
      )}

      <ArtworkSidebarPartnerInfoFragmentContainer artwork={artwork} />

      {!shouldHideDetailsCreateAlertCTA && (
        <CreateArtworkAlertSectionFragmentContainer artwork={artwork} />
      )}

      <ArtworkSidebarExtraLinksFragmentContainer artwork={artwork} />
    </ArtworkSidebarContainer>
  )
}

export const ArtworkSidebarFragmentContainer = createFragmentContainer(
  ArtworkSidebar,
  {
    artwork: graphql`
      fragment ArtworkSidebar_artwork on Artwork {
        is_in_auction: isInAuction
        is_sold: isSold
        is_biddable: isBiddable
        is_acquireable: isAcquireable
        is_offerable: isOfferable
        hasCertificateOfAuthenticity
        partner {
          isVerifiedSeller
        }
        ...ArtworkSidebarArtists_artwork
        ...ArtworkSidebarMetadata_artwork
        ...ArtworkSidebarAuctionPartnerInfo_artwork
        ...ArtworkSidebarAuctionInfoPolling_artwork
        ...ArtworkSidebarAuctionTimer_artwork
        ...ArtworkSidebarCommercial_artwork
        ...ArtworkSidebarPartnerInfo_artwork
        ...ArtworkSidebarExtraLinks_artwork
        ...SecurePayment_artwork
        ...VerifiedSeller_artwork
        ...AuthenticityCertificate_artwork
        ...BuyerGuarantee_artwork
        ...CreateArtworkAlertSection_artwork
        ...ArtworkSidebarBiddingClosedMessage_artwork
        sale {
          is_closed: isClosed
          startAt
          internalID
          extendedBiddingIntervalMinutes
        }
        saleArtwork {
          endAt
          endedAt
          extendedBiddingEndAt
          lotID
        }
        artists {
          internalID
        }
      }
    `,
    me: graphql`
      fragment ArtworkSidebar_me on Me {
        ...ArtworkSidebarAuctionInfoPolling_me
      }
    `,
  }
)

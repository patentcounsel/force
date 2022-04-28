import { LotTimer_saleArtwork } from "v2/__generated__/LotTimer_saleArtwork.graphql"
import { createFragmentContainer, graphql } from "react-relay"
import * as React from "react"
import { Text, Spacer, Box } from "@artsy/palette"
import { useTimer } from "v2/Utils/Hooks/useTimer"
import { getSaleOrLotTimerInfo } from "v2/Utils/getSaleOrLotTimerInfo"
import { ArtworkSidebarAuctionProgressBar } from "./ArtworkSidebarAuctionProgressBar"

export interface LotTimerProps {
  saleArtwork: LotTimer_saleArtwork
}

export const LotTimer: React.FC<LotTimerProps> = ({ saleArtwork }) => {
  const { endAt, extendedBiddingEndAt } = saleArtwork

  const startAt = saleArtwork?.sale?.startAt
  const extendedBiddingPeriodMinutes =
    saleArtwork?.sale?.extendedBiddingPeriodMinutes
  const extendedBiddingIntervalMinutes =
    saleArtwork?.sale?.extendedBiddingIntervalMinutes

  const biddingEndAt = extendedBiddingEndAt ?? endAt
  const { hasEnded, time, hasStarted } = useTimer(biddingEndAt!, startAt!)

  if (!endAt) {
    return null
  }

  const timerInfo = getSaleOrLotTimerInfo(time, {
    hasStarted,
    lotsAreClosing: false,
    isSaleInfo: false,
    extendedBiddingEndAt,
  })

  return (
    <Box textAlign={"center"}>
      <Text variant="md" color={"blue100"}>
        {!hasEnded && <Text color={timerInfo.color}>{timerInfo.copy}</Text>}
      </Text>

      {extendedBiddingPeriodMinutes && extendedBiddingIntervalMinutes && (
        <ArtworkSidebarAuctionProgressBar
          time={time}
          extendedBiddingPeriodMinutes={extendedBiddingPeriodMinutes}
          extendedBiddingIntervalMinutes={extendedBiddingIntervalMinutes}
          hasBeenExtended={!!extendedBiddingEndAt}
        />
      )}

      <Text variant="md" color={"black60"}>
        {saleArtwork.formattedStartDateTime}
      </Text>

      {extendedBiddingPeriodMinutes && (
        <>
          <Spacer mt={1} />
          <Text variant="xs" color={"black60"}>
            *Closure times may be extended to accomodate last minute bids
          </Text>
        </>
      )}
    </Box>
  )
}

export const LotTimerFragmentContainer = createFragmentContainer(LotTimer, {
  saleArtwork: graphql`
    fragment LotTimer_saleArtwork on SaleArtwork {
      endAt
      formattedStartDateTime
      extendedBiddingEndAt
      sale {
        startAt
        extendedBiddingPeriodMinutes
        extendedBiddingIntervalMinutes
      }
    }
  `,
})
import * as React from "react"
import { useCountdownTimer } from "Apps/Conversations/hooks/useCountdownTimer"
import StopwatchIcon from "@artsy/icons/StopwatchIcon"
import { DateTime } from "luxon"
import { Box, ProgressBar, Spacer, Text } from "@artsy/palette"
import { graphql, useFragment } from "react-relay"
import { PartnerOfferTimerItem_order$key } from "__generated__/PartnerOfferTimerItem_order.graphql"

export const PartnerOfferTimerItem: React.FC<{
  order: PartnerOfferTimerItem_order$key
}> = ({ order }) => {
  const data = useFragment(query, order)

  const startTime = data.stateUpdatedAt || ""
  const endTime = data.stateExpiresAt || ""

  const { remainingTime, percentComplete } = useCountdownTimer({
    startTime: startTime,
    endTime: endTime,
  })

  if (data.displayState !== "PENDING") {
    return null
  }

  const actionDeadline = DateTime.fromISO(endTime, {
    zone: "America/New_York",
  }).toFormat("MMM d, h:mm a ZZZZ")

  return (
    <>
      <Box flexDirection="row" textAlign="center">
        <>
          <Text variant="sm" color="blue100" mt={2}>
            <StopwatchIcon
              display="inline-block"
              top="0.2rem"
              width={14}
              height={17}
              fill="blue100"
            />
            {remainingTime} left
          </Text>
          <ProgressBar percentComplete={percentComplete} highlight="blue100" />
          <Text variant="sm" fontWeight="bold">
            Purchase by {actionDeadline}
          </Text>
          <Text variant="xs" color="black60">
            Offer Expires after 72 hours.
          </Text>
          <Text variant="xs" color="black60">
            Keep in mind the work can be sold to another buyer in the meantime.
          </Text>
        </>
      </Box>
      <Spacer y={2} />
    </>
  )
}

const query = graphql`
  fragment PartnerOfferTimerItem_order on CommerceOrder {
    displayState
    stateExpiresAt
    stateUpdatedAt
  }
`

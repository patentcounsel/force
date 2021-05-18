import React from "react"
import { Text, Message } from "@artsy/palette"
import { RouterLink } from "v2/Artsy/Router/RouterLink"
import { createFragmentContainer, graphql } from "react-relay"
import { SubscriberBanner_partner } from "v2/__generated__/SubscriberBanner_partner.graphql"

export interface SubscriberBannerProps {
  partner: SubscriberBanner_partner
}

export const SubscriberBanner: React.FC<SubscriberBannerProps> = ({
  partner: { hasFairPartnership, name },
}) => {
  const fairPartner = `${name} participates in Artsy’s art fair coverage but does not have a full profile.`
  const churnedPartner = `${name} is not currently an Artsy partner and does not have a full profile.`
  return (
    <Message title={hasFairPartnership ? fairPartner : churnedPartner}>
      <Text display="inline">{`Do you represent ${name}?`}</Text>
      <RouterLink to="https://partners.artsy.net/gallery-partnerships/">
        <Text display="inline">
          &nbsp;Learn about Artsy gallery partnerships.
        </Text>
      </RouterLink>
    </Message>
  )
}

export const SubscriberBannerFragmentContainer = createFragmentContainer(
  SubscriberBanner,
  {
    partner: graphql`
      fragment SubscriberBanner_partner on Partner {
        hasFairPartnership
        name
      }
    `,
  }
)

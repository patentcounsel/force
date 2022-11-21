import { useContext } from "react"
import * as React from "react"
import { graphql } from "react-relay"
import styled from "styled-components"
import { NavBarMobileMenuInboxNotificationCountQuery } from "__generated__/NavBarMobileMenuInboxNotificationCountQuery.graphql"
import { SystemContext } from "System/SystemContext"
import { SystemQueryRenderer } from "System/Relay/SystemQueryRenderer"
import { Text } from "@artsy/palette"
import { createFragmentContainer } from "react-relay"
import { NavBarMobileMenuInboxNotificationCount_me$data } from "__generated__/NavBarMobileMenuInboxNotificationCount_me.graphql"

interface NavBarMobileMenuInboxNotificationCountProps {
  me?: NavBarMobileMenuInboxNotificationCount_me$data | null
}

export const NavBarMobileMenuInboxNotificationCount: React.FC<NavBarMobileMenuInboxNotificationCountProps> = ({
  me,
}) => {
  const conversationCount = me?.unreadConversationCount

  if (conversationCount === 0) return null

  return (
    <Container variant="xs" lineHeight={1} bg="brand" color="white100">
      {conversationCount}
    </Container>
  )
}

export const NavBarMobileMenuInboxNotificationCountFragmentContainer = createFragmentContainer(
  NavBarMobileMenuInboxNotificationCount,
  {
    me: graphql`
      fragment NavBarMobileMenuInboxNotificationCount_me on Me {
        unreadConversationCount
      }
    `,
  }
)

export const NavBarMobileMenuInboxNotificationCountQueryRenderer: React.FC<{}> = () => {
  const { relayEnvironment } = useContext(SystemContext)

  return (
    <SystemQueryRenderer<NavBarMobileMenuInboxNotificationCountQuery>
      environment={relayEnvironment}
      query={graphql`
        query NavBarMobileMenuInboxNotificationCountQuery {
          me {
            ...NavBarMobileMenuInboxNotificationCount_me
          }
        }
      `}
      render={({ error, props }) => {
        if (error) {
          console.error(error)
          return null
        }

        if (!props || !props.me) {
          return <NavBarMobileMenuInboxNotificationCount />
        }

        return (
          <NavBarMobileMenuInboxNotificationCountFragmentContainer
            me={props.me}
          />
        )
      }}
    />
  )
}

const Container = styled(Text)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

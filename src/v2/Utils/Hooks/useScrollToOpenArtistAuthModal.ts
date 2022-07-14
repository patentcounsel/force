import Cookies from "cookies-js"
import { useEffect } from "react"
import { fetchQuery, graphql } from "react-relay"
import { useSystemContext } from "v2/System"
import { getENV } from "../getENV"
import { useScrollToOpenArtistAuthModalQuery } from "v2/__generated__/useScrollToOpenArtistAuthModalQuery.graphql"
import { extractNodes } from "../extractNodes"
import { openAuthModal } from "../openAuthModal"
import { mediator } from "lib/mediator"
import { ModalType } from "v2/Components/Authentication/Types"
import { ContextModule, Intent } from "@artsy/cohesion"

const KEY = "artist-page-signup-dismissed"

const dismiss = () => {
  Cookies.set(KEY, 1, { expires: 31536000 })
}

export const USE_SCROLL_TO_OPEN_ARTIST_AUTH_MODAL_QUERY = graphql`
  query useScrollToOpenArtistAuthModalQuery($id: String!) {
    artist(id: $id) {
      name
      filterArtworksConnection(
        first: 1
        marketable: true
        sort: "-decayed_merch"
      ) {
        edges {
          node {
            image {
              cropped(width: 450, height: 1075) {
                src
              }
            }
          }
        }
      }
    }
  }
`

export const useScrollToOpenArtistAuthModal = () => {
  const { relayEnvironment } = useSystemContext()

  useEffect(() => {
    if (!relayEnvironment) return

    // Is enabled by server-side middleware
    if (!getENV("ARTIST_PAGE_CTA_ENABLED")) return

    // Does not display if previously dismissed, is mobile, or is logged in
    if (Cookies.get(KEY) || getENV("IS_MOBILE") || getENV("CURRENT_USER")) {
      return
    }

    const id = getENV("ARTIST_PAGE_CTA_ARTIST_ID")

    if (!id) return

    const init = async () => {
      const { artist } = await fetchQuery<useScrollToOpenArtistAuthModalQuery>(
        relayEnvironment,
        USE_SCROLL_TO_OPEN_ARTIST_AUTH_MODAL_QUERY,
        { id: id }
      )

      if (!artist) return

      const [artwork] = extractNodes(artist.filterArtworksConnection)

      if (!artwork) return

      const image = artwork.image?.cropped?.src

      const handleScroll = () => {
        setTimeout(() => {
          openAuthModal(mediator, {
            contextModule: ContextModule.popUpModal,
            copy: `Join Artsy to discover new works by ${artist.name} and more artists you love`,
            destination: location.href,
            image,
            intent: Intent.viewArtist,
            mode: ModalType.signup,
            triggerSeconds: 4,
          })
        }, 2000)
      }

      window.addEventListener("scroll", handleScroll, { once: true })
      mediator.once("modal:closed", dismiss)
      mediator.once("auth:sign_up:success", dismiss)

      return () => {
        window.removeEventListener("scroll", handleScroll)
        mediator.off("modal:closed", dismiss)
        mediator.off("auth:sign_up:success", dismiss)
      }
    }

    init()
  }, [relayEnvironment])
}
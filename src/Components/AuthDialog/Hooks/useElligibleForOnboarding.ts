import { Intent } from "@artsy/cohesion"
import { useAuthDialogContext } from "Components/AuthDialog/AuthDialogContext"

export const COMMERCIAL_AUTH_INTENTS = [
  Intent.bid,
  Intent.buyNow,
  Intent.createAlert,
  Intent.inquire,
  Intent.makeOffer,
  Intent.registerToBid,
]

export const useElligibleForOnboarding = () => {
  const {
    state: { mode, analytics },
  } = useAuthDialogContext()

  const isElligibleForOnboarding =
    // Only trigger onboarding for sign ups...
    mode === "SignUp" &&
    // ...without a commercial intent
    !(analytics.intent && COMMERCIAL_AUTH_INTENTS.includes(analytics.intent))

  return { isElligibleForOnboarding }
}

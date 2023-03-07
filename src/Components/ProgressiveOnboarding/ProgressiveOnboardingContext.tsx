import { useDidMount } from "@artsy/palette"
import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { PROGRESSIVE_ONBOARDING_FIND_FOLLOWS } from "Components/ProgressiveOnboarding/ProgressiveOnboardingFindFollows"
import { PROGRESSIVE_ONBOARDING_FOLLOW_ARTIST } from "Components/ProgressiveOnboarding/ProgressiveOnboardingFollowArtist"
import { uniq } from "lodash"
import { useFeatureFlag } from "System/useFeatureFlag"
import { PROGRESSIVE_ONBOARDING_SAVE_ARTWORK } from "Components/ProgressiveOnboarding/ProgressiveOnboardingSaveArtwork"
import { PROGRESSIVE_ONBOARDING_FIND_SAVES } from "Components/ProgressiveOnboarding/ProgressiveOnboardingFindSaves"
import { PROGRESSIVE_ONBOARDING_FOLLOWS_HIGHLIGHT } from "Components/ProgressiveOnboarding/ProgressiveOnboardingFollowsHighlight"
import { PROGRESSIVE_ONBOARDING_SAVES_HIGHLIGHT } from "Components/ProgressiveOnboarding/ProgressiveOnboardingSavesHighlight"

const ProgressiveOnboardingContext = createContext<{
  dismissed: ProgressiveOnboardingKey[]
  dismiss: (key: ProgressiveOnboardingKey) => void
  isDismissed: (key: ProgressiveOnboardingKey) => boolean
}>({
  dismissed: [],
  dismiss: () => {},
  isDismissed: () => false,
})

export const ProgressiveOnboardingProvider: FC = ({ children }) => {
  const [dismissed, setDismissed] = useState<ProgressiveOnboardingKey[]>([])

  const dismiss = useCallback(
    (key: ProgressiveOnboardingKey) => {
      __dismiss__(key)
      setDismissed([...dismissed, key])
    },
    [dismissed]
  )

  useEffect(() => {
    setDismissed(get())
  }, [])

  const mounted = useDidMount()

  const isDismissed = useCallback(
    (key: ProgressiveOnboardingKey) => {
      return !mounted || dismissed.includes(key)
    },
    [dismissed, mounted]
  )

  return (
    <ProgressiveOnboardingContext.Provider
      value={{ dismissed, dismiss, isDismissed }}
    >
      {children}
    </ProgressiveOnboardingContext.Provider>
  )
}

const FEATURE_FLAG_KEY = "progressive-onboarding-artist"

export const useProgressiveOnboarding = () => {
  const { dismiss, dismissed, isDismissed } = useContext(
    ProgressiveOnboardingContext
  )

  const enabled = useFeatureFlag(FEATURE_FLAG_KEY)

  return {
    dismiss,
    dismissed,
    enabled,
    isDismissed,
  }
}

const LOCAL_STORAGE_KEY = "progressive-onboarding-dismissed"

const PROGRESSIVE_ONBOARDING_KEYS = [
  PROGRESSIVE_ONBOARDING_FOLLOW_ARTIST,
  PROGRESSIVE_ONBOARDING_FIND_FOLLOWS,
  PROGRESSIVE_ONBOARDING_FOLLOWS_HIGHLIGHT,
  PROGRESSIVE_ONBOARDING_SAVE_ARTWORK,
  PROGRESSIVE_ONBOARDING_FIND_SAVES,
  PROGRESSIVE_ONBOARDING_SAVES_HIGHLIGHT,
] as const

type ProgressiveOnboardingKey = typeof PROGRESSIVE_ONBOARDING_KEYS[number]

export const parse = (value: string | null): ProgressiveOnboardingKey[] => {
  if (!value) return []

  try {
    const parsed = JSON.parse(value)

    return parsed.filter((key: any) => {
      return PROGRESSIVE_ONBOARDING_KEYS.includes(key)
    })
  } catch (err) {
    return []
  }
}

export const __dismiss__ = (key: ProgressiveOnboardingKey) => {
  const item = localStorage.getItem(LOCAL_STORAGE_KEY)
  const dismissed = parse(item)

  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(uniq([...dismissed, key]))
  )
}

export const get = () => {
  const item = localStorage.getItem(LOCAL_STORAGE_KEY)

  return parse(item)
}

export const reset = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY)
}

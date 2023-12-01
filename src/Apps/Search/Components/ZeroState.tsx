import { Box, Separator, Spacer, Text } from "@artsy/palette"
import { SendFeedback } from "Apps/Search/Components/SendFeedback"
import { CreateAlertButton } from "Components/Alert/Components/CreateAlertButton"
import { ArtworkFilterAlertContextProvider } from "Components/ArtworkFilter/ArtworkFilterAlertContextProvider"
import { useArtworkFilterContext } from "Components/ArtworkFilter/ArtworkFilterContext"
import { FC } from "react"
import { useTranslation } from "react-i18next"

interface ZeroStateProps {
  term: string
}

export const ZeroState: FC<ZeroStateProps> = ({ term }) => {
  const { hasFilters, filters } = useArtworkFilterContext()
  const { t } = useTranslation()

  return (
    <>
      <Text variant={["lg-display", "xl"]}>
        {hasFilters ? (
          t`searchApp.noResultsFound`
        ) : (
          <>
            {t(`searchApp.resultsCount`, { count: 0 })}
            <Box as="span" color="blue100">
              {" "}
              “{filters?.term ?? term}”
            </Box>
          </>
        )}
      </Text>

      <Text variant={["lg-display", "xl"]} color="black60">
        {hasFilters
          ? "Try removing some filters or try another search term."
          : "Try checking for spelling errors or try another search term."}
      </Text>

      <Spacer y={2} />

      <ArtworkFilterAlertContextProvider>
        <CreateAlertButton />
      </ArtworkFilterAlertContextProvider>

      <Separator my={4} />

      <SendFeedback />
    </>
  )
}

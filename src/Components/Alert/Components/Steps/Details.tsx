import ChevronRightIcon from "@artsy/icons/ChevronRightIcon"
import {
  Box,
  Button,
  Clickable,
  Flex,
  Join,
  Spacer,
  Text,
  useDidMount,
} from "@artsy/palette"
import { Formik } from "formik"
import { FC } from "react"
import { CriteriaPills } from "Components/Alert/Components/CriteriaPills"
import { DetailsInput } from "Components/SavedSearchAlert/Components/DetailsInput"
import { PriceRangeFilter } from "Components/Alert/Components/Form/PriceRange"
import { useAlertContext } from "Components/Alert/Hooks/useAlertContext"
import { useFeatureFlag } from "System/useFeatureFlag"
import { useAlertTracking } from "Components/Alert/Hooks/useAlertTracking"
import { NotificationPreferencesQueryRenderer } from "Components/Alert/Components/NotificationPreferences"
import { SugggestedFiltersQueryRenderer } from "Components/Alert/Components/Form/SuggestedFilters"
import { SavedSearchFrequency } from "Components/SavedSearchAlert/types"

export interface AlertFormikValues {
  name: string
  push: boolean
  email: boolean
  details: string
  frequency?: SavedSearchFrequency
}

export const Details: FC = () => {
  const { clickedAddFilters } = useAlertTracking()

  const { onComplete, dispatch, goToFilters, state } = useAlertContext()

  const newAlertModalFilteresEnabled = useFeatureFlag(
    "onyx_artwork_alert_modal_v2_filters"
  )
  const enableSuggestedFilters = useFeatureFlag(
    "onyx_saved_searches_suggested_filters"
  )

  const isMounted = useDidMount()

  return (
    <Formik<AlertFormikValues>
      initialValues={state.settings}
      onSubmit={onComplete}
    >
      {({ isSubmitting, values, handleSubmit }) => {
        const transitionToFiltersAndTrack = () => {
          dispatch({ type: "SET_SETTINGS", payload: values })
          goToFilters()
          clickedAddFilters()
        }

        return (
          <Box
            maxWidth={[null, 500]}
            style={{
              ...(isMounted
                ? {
                    opacity: 1,
                    transition: "opacity 250ms",
                  }
                : {
                    opacity: 0,
                  }),
            }}
          >
            <Flex flexDirection="column" p={2}>
              <Join separator={<Spacer y={4} />}>
                <Box>
                  <Text variant="sm-display" mb={1}>
                    We'll send you alerts for
                  </Text>
                  <Flex flexWrap="wrap" gap={1}>
                    <CriteriaPills />
                  </Flex>
                </Box>

                {newAlertModalFilteresEnabled && !enableSuggestedFilters && (
                  <Clickable
                    data-testid="addFilters"
                    onClick={transitionToFiltersAndTrack}
                    width="100%"
                  >
                    <Flex justifyContent="space-between" alignItems={"center"}>
                      <Box>
                        <Text variant="sm-display">Add Filters:</Text>

                        <Text variant="sm" color="black60">
                          Including Price Range, Rarity, Medium, Color
                        </Text>
                      </Box>

                      <ChevronRightIcon />
                    </Flex>
                  </Clickable>
                )}

                {!newAlertModalFilteresEnabled && (
                  <PriceRangeFilter expanded={false} />
                )}

                {newAlertModalFilteresEnabled && enableSuggestedFilters && (
                  <SugggestedFiltersQueryRenderer
                    transitionToFiltersAndTrack={transitionToFiltersAndTrack}
                  />
                )}
                <DetailsInput />

                <NotificationPreferencesQueryRenderer mode="create" />
              </Join>
            </Flex>

            <Box position="sticky" bottom={0} bg={"white100"} p={2}>
              <Button
                data-testid="submitCreateAlert"
                loading={isSubmitting}
                onClick={() => {
                  dispatch({ type: "SET_SETTINGS", payload: values })
                  handleSubmit()
                }}
                width="100%"
              >
                Create Alert
              </Button>
            </Box>
          </Box>
        )
      }}
    </Formik>
  )
}

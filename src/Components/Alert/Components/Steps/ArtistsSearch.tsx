import ChevronLeftIcon from "@artsy/icons/ChevronLeftIcon"
import { Box, Clickable, Flex, Input, Separator, Text } from "@artsy/palette"
import { FC } from "react"
import { useAlertContext } from "Components/Alert/Hooks/useAlertContext"
import { useDidMount } from "Utils/Hooks/useDidMount"

export const ArtistsSearch: FC = () => {
  const { goToDetails } = useAlertContext()
  const isMounted = useDidMount()

  return (
    <Box
      minWidth={[null, 500]}
      maxHeight={["auto", 750]}
      minHeight={["auto", 750]}
      overflowY="auto"
      style={{
        ...(isMounted
          ? {
              opacity: 1,
              transform: "translateX(0)",
              transition: "opacity 300ms, transform 300ms",
            }
          : {
              opacity: 0,
              transform: "translateX(20px)",
            }),
      }}
    >
      <Flex flexDirection="column" width="auto">
        <Clickable
          onClick={() => {
            goToDetails()
          }}
          position="sticky"
          top="0"
          bg="white100"
          zIndex={2}
        >
          <Flex justifyContent="flex-start" alignItems="center" p={2}>
            <ChevronLeftIcon />
            <Text variant="sm">Create Alert</Text>
          </Flex>
          <Separator />
        </Clickable>

        <Box p={2}>
          <Input
            title="Search by artist, e.g. Banksy or Damien Hirst"
            name="artists"
            placeholder={"Search by artist, e.g. Banksy or Damien Hirst"}
          />
        </Box>
      </Flex>
    </Box>
  )
}

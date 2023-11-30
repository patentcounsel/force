import { Box, Flex, Option, Select, Text } from "@artsy/palette"
import { CreateAlertButton } from "Components/Alert/Components/CreateAlertButton"
import { ArtworkFilterAlertContextProvider } from "Components/ArtworkFilter/ArtworkFilterAlertContextProvider"
import { FC } from "react"

interface SavedSearchAlertHeaderProps {
  selected: string
  onSortSelect: (value: string) => void
}

const SORT_OPTIONS: Option[] = [
  { value: "CREATED_AT_DESC", text: "Recently Added" },
  { value: "NAME_ASC", text: "Name (A-Z)" },
]

export const SavedSearchAlertHeader: FC<SavedSearchAlertHeaderProps> = ({
  selected,
  onSortSelect,
}) => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      alignItems={["stretch", "center"]}
      justifyContent="space-between"
      mb={4}
      mx={[2, 0]}
    >
      <Flex
        flexDirection={["column", "row"]}
        alignItems={["stretch", "center"]}
        mb={[4, 0]}
      >
        <Text variant={["md", "lg"]} mr={[0, 2]}>
          Alerts
        </Text>

        <Box maxWidth={["250px", null]} mt={[1, 0]}>
          <ArtworkFilterAlertContextProvider>
            <CreateAlertButton />
          </ArtworkFilterAlertContextProvider>
        </Box>
      </Flex>

      <Select
        title="Sort"
        options={SORT_OPTIONS}
        selected={selected}
        onSelect={onSortSelect}
        width="auto"
      />
    </Flex>
  )
}

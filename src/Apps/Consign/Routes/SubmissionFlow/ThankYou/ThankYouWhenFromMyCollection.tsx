import { Button, Flex, Text } from "@artsy/palette"
import { RouterLink } from "System/Router/RouterLink"

export const ThankYouWhenFromMyCollection: React.FC = () => {
  return (
    <>
      <Text variant="xl" mt={4}>
        Your artwork has been submitted
      </Text>
      <Text variant="md" color="black60" mt={1} mb={[4, 6]}>
        We will email you within 1-3 days to confirm if your artwork has been
        accepted or not.
      </Text>

      <Flex
        flexDirection={["column", "row"]}
        alignItems={["stretch", "center"]}
      >
        <RouterLink to="/my-collection">
          <Button
            width={["100%", "auto"]}
            data-test-id="back-to-my-collection"
            size="large"
            variant="primaryBlack"
          >
            Back to My Collection
          </Button>
        </RouterLink>
      </Flex>
    </>
  )
}
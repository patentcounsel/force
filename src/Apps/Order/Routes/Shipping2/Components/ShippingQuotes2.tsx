import * as React from "react"
import {
  BorderedRadio,
  Column,
  Flex,
  GridColumns,
  RadioGroup,
  Text,
} from "@artsy/palette"
import { graphql, useFragment } from "react-relay"
import { ShippingQuotes_shippingQuotes$key } from "__generated__/ShippingQuotes_shippingQuotes.graphql"
import { useShippingContext } from "Apps/Order/Routes/Shipping2/Hooks/useShippingContext"

export interface ShippingQuotesProps {
  onSelect: (shippingQuoteId: string) => void
  shippingQuotes: ShippingQuotes_shippingQuotes$key
}

export const ShippingQuotes2: React.FC<ShippingQuotesProps> = ({
  onSelect,
  shippingQuotes,
}) => {
  const data = useFragment(
    graphql`
      fragment ShippingQuotes2_shippingQuotes on CommerceShippingQuoteEdge
        @relay(plural: true) {
        node {
          id
          isSelected
          price(precision: 2)
          priceCents
          typeName
        }
      }
    `,
    shippingQuotes
  )

  const shippingContext = useShippingContext()

  const quotes = data?.map(quote => quote.node)

  if (!quotes || !quotes.length) {
    return null
  }

  return (
    <RadioGroup
      onSelect={onSelect}
      defaultValue={shippingContext.parsedOrderData.selectedShippingQuoteId}
    >
      {quotes.map(shippingQuote => {
        const description =
          shippingQuoteDescriptions[shippingQuote?.typeName as string]
        const displayName =
          shippingQuoteDisplayNames[shippingQuote?.typeName as string]

        return (
          <BorderedRadio
            data-test="shipping-quotes"
            value={shippingQuote?.id}
            key={shippingQuote?.id}
            position="relative"
          >
            <Flex flexDirection="column" width="100%">
              <GridColumns>
                <Column span={10}>
                  <Text variant="sm-display" textTransform="capitalize">
                    {displayName}
                  </Text>
                  <Text textColor="black60">{description}</Text>
                </Column>
                <Column span={2} textAlign={"right"}>
                  <Text textTransform="capitalize" data-test="quotePrice">
                    {shippingQuote?.price}
                  </Text>
                </Column>
              </GridColumns>
            </Flex>
          </BorderedRadio>
        )
      })}
    </RadioGroup>
  )
}

export const shippingQuoteDescriptions = {
  // Domestic shipping quotes
  ground:
    "Delivers to your door in 3-5 business days once packaged and shipped via a common carrier.",
  second_day_air:
    "Delivers to your door in 2 business days once packaged and shipped via a common carrier.",
  next_day_air:
    "Delivers to your door in 1 business day once packaged and shipped via a common carrier.",
  select:
    "Inside delivery shipped via a white glove shipping service with custom packaging. Delivery timing variable.",
  premium:
    "Room-of-choice delivery handled via trained technicians with specialized packaging and climate-controlled transportation. Recommended for high-value works. Delivery timing variable.",
  // International shipping quotes
  economy:
    "Delivers to your door in 5-7 business days once packaged and shipped via a common carrier, depending on destination and prompt payment of applicable duties and taxes.",
  standard:
    "Delivers to your door in 3-5 business days once packaged and shipped via a common carrier, depending on destination and prompt payment of applicable duties and taxes.",
  priority:
    "Delivers to your door in 2-4 business days once packaged and shipped via a common carrier, depending on destination and prompt payment of applicable duties and taxes.",
}

export const shippingQuoteDisplayNames = {
  // Domestic shipping quotes
  ground: "Standard",
  second_day_air: "Express",
  next_day_air: "Rush",
  select: "Premium",
  premium: "White Glove",
  // International shipping quotes
  economy: "Saver",
  standard: "Standard",
  priority: "Priority",
}

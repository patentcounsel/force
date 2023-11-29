import * as React from "react"
import { FC } from "react"
import { Box, Flex, Text, Spacer, Clickable } from "@artsy/palette"
import { SuggestionItemPreview } from "Components/Search/SuggestionItem/SuggestionItemPreview"
import match from "autosuggest-highlight/match"
import parse from "autosuggest-highlight/parse"
import { Highlight } from "Components/Search/SuggestionItem/Highlight"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export interface ArtistSearchItemOptionProps {
  text: string
  value: string
  subtitle: string
  imageUrl: string
  slug: string
}

interface ArtistSearchItemProps {
  query: string
  option: any // TODO: fix any
  onClick: (option?: ArtistSearchItemOptionProps) => void
}

export const ArtistSearchItem: FC<ArtistSearchItemProps> = ({
  query,
  option,
  onClick,
}) => {
  const matches = match(option.text, query)
  const parts = parse(option.text, matches)
  const partTags = parts.map(({ highlight, text }, index) =>
    highlight ? <Highlight key={index}>{text}</Highlight> : text
  )

  return (
    <Container onClick={() => onClick(option)} py={1}>
      <Box position="relative" ml={1}>
        <Flex alignItems="center">
          <SuggestionItemPreview
            imageUrl={option.imageUrl}
            label={option.subtitle}
          />
          <Spacer x={1} />
          <Flex flexDirection="column" flex={1} overflow="hidden">
            <Text variant="sm-display" overflowEllipsis>
              {partTags}
            </Text>

            <Text color="black60" variant="xs" overflowEllipsis>
              {option.subtitle}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

const Container = styled(Clickable)`
  display: block;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    outline: 0;
    background-color: ${themeGet("colors.black5")};
  }
`

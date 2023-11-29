import { FC } from "react"
import { Input } from "@artsy/palette"
import { useAlertContext } from "Components/Alert/Hooks/useAlertContext"

export const SelectArtistsInput: FC = () => {
  const { goToArtists } = useAlertContext()

  const transitionToArtists = () => {
    goToArtists()
  }

  return (
    <Input
      title="Search by artist, e.g. Banksy or Damien Hirst"
      name="artists"
      placeholder={"Search by artist, e.g. Banksy or Damien Hirst"}
      onClick={transitionToArtists}
    />
  )
}

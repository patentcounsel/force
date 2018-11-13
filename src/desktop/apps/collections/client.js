import { buildClientApp } from "reaction/Artsy/Router/client"
import { data as sd } from "sharify"
import { routes } from "reaction/Apps/Collections/routes"
import mediator from "desktop/lib/mediator.coffee"
import React from "react"
import ReactDOM from "react-dom"

buildClientApp({ routes, user: sd.CURRENT_USER })
  .then(({ ClientApp }) => {
    ReactDOM.hydrate(
      <ClientApp mediator={mediator} />,
      document.getElementById("react-root")
    )
  })
  .catch(error => {
    console.error(error)
  })

if (module.hot) {
  module.hot.accept()
}

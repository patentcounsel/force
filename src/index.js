// @ts-check

// This must come before any other instrumented module.
// See https://docs.datadoghq.com/tracing/languages/nodejs/ for more info.
import "./lib/datadog"
import "dotenv/config"

// Needs to be first, due to sharify side-effects.
import { initializeMiddleware } from "./middleware"

import express from "express"
import config from "./config"
import chalk from "chalk"
import { startServer } from "./lib/startServer"
import { app as errorHandling } from "lib/middleware/errorHandling"
import legacyDesktopApp from "./desktop"
import legacyMobileApp from "./mobile"
import forceV2 from "./v2/server"

console.log(chalk.green(`\n[Force] NODE_ENV=${config.NODE_ENV}\n`))

const app = express()

initializeMiddleware(app)

// Mount v2 Force
app.use("/", forceV2)

// Mount legacy mobile apps
app.use((req, res, next) => {
  if (res.locals.sd.IS_MOBILE) {
    // Mount mobile app
    legacyMobileApp(req, res, next)
  } else {
    next()
  }
})

// Mount legacy desktop apps
app.use(legacyDesktopApp)

// Error handling goes last
app.use(errorHandling)

// Boot server
startServer(app)

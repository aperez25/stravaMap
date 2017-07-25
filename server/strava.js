const strava = require('strava-v3')

const router = require('express').Router()
const config = require('../node_modules/strava-v3/strava_config')

router

.get('/', (req, res, next) => {
  strava.athlete.listRoutes({ access_token: config.access_token }, (err, payload) => {
    const routes = payload.map(route => ({
      name: route.name,
      id: route.id,
    }))
    res.send(routes)
    if (err) next(err)
  })
})

.get('/:routeId', (req, res, next) => {
  const id = req.params.routeId
  strava.routes.get({ id, access_token: config.access_token }, (err, payload) => {
    const segments = payload.segments.map(segment => ({

    })) // array
    res.send(payload)
    if (err) next(err)
  })
})

module.exports = router

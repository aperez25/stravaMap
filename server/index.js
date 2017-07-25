const api = module.exports = require('express').Router()

api
  .use('/strava', require('./strava'))
//   .use('/apiai', require('./site'))

// No routes matched? 404.
api
.use((req, res) => res.status(404).end())
.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
})

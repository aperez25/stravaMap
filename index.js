const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app

.use(morgan('dev'))
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended: true}))

.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
  next();
})


.use(express.static(path.join(__dirname,
 './public')))
.use('/jquery', express.static(path.join(__dirname,
 './node_modules/jquery/jquery.min.js ')))

.use('/api', require('./server'))

// .get('/*', (req, res) => res.redirect('/'))

.listen(process.env.PORT || 3978, () => console.log('Gitbot listening on port 3978'));

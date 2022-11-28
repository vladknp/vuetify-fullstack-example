if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: require('path').resolve(__dirname, './', '.env') })
}

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { 
  clientErrorHandler,
  errorHandler,
  errorLogger,
  requestLogger,
  notFoundHandler
} = require('./middlewares')
const clientRoutes = require('./routes')
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },

  credentials: true,
}

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(requestLogger)

app.use('/api', clientRoutes)

app.use(errorLogger)
app.use(clientErrorHandler)
app.use(errorHandler)
app.use(notFoundHandler)

const port = process.env.API_PORT
app.listen(port || 6000, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error)
});

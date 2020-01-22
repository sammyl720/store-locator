const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectedDB = require('./config/db')

// load env vars
dotenv.config({
  path: './config/config.env'
})

// connect to db
connectedDB()

const app = express()

// body parser
app.use(express.json())

// Enable cors
app.use(cors())

// static folder
app.use(express.static(path.join(__dirname, 'public')))
// routes
app.use('/api/v1/stores', require('./routes/stores'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
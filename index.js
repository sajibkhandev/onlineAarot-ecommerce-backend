require('dotenv').config()
const express = require('express');
const  route  = require('./route');
const mongodbConfig = require('./dbConfigs/mongodbConfig');
const app = express()
const port = 3000


// DB_Connection
mongodbConfig()


// Middleware
app.use(express.json())
app.use(route)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

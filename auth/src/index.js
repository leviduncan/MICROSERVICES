const express = require('express')
const app = express()

const port = 8001

app.get('/', (req, res) => {
  res.send('Welcome to the AUTH service')
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
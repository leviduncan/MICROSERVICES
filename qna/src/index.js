const express = require('express')
const app = express()

const port = 8001

app.get('/', (req, res) => {
  res.send('Welcome to the QnA service')
})

app.get('/ask', (req, res) => {
  res.json({
    question: "What is the meaning of life?",
    answer: "42",
  })
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
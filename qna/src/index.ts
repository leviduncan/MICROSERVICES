import express, {Express, Request, Response} from 'express'
import mongoose, { ConnectOptions } from 'mongoose'


const app: Express = express()

const DATABASE_URL: string = 'mongodb://mongoqna/qna'

const port = 8001

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions)
.then(() => {
  console.log('Connected to DB')
})
  .catch((err: Error) => {
    console.log('Error connecting to DB')
  })


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the QnA service')
})

app.get('/ask', (req: Request, res: Response) => {
  res.json({
    question: "What is the meaning of life?",
    answer: "42",
  })
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
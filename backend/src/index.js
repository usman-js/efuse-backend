import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import httpStatus from 'http-status'
import { databaseConnection } from './config/db.config'
import logger from './config/logger.config'
import userRouter from './modules/user/user.router'
import postRouter from './modules/post/post.router'

export const app = express()
// set security HTTP headers
app.use(helmet())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(cors())
app.get('/', (_req, res) => {
  res.status(200).json({ status: httpStatus[200], message: httpStatus['200_MESSAGE'] })
})

app.use('/api/user', userRouter)
app.use('/api/post', postRouter)

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  res.status(404).json({ status: httpStatus[404], message: httpStatus['404_MESSAGE'] })
})
process.on('unhandledRejection', (err) => {
  logger.error('Uncaught Rejection: ' + err)
})

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception: ' + err)
})

databaseConnection()
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`REST API on http://localhost:${PORT}/api`)
})

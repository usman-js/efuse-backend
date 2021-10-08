import logger from "./logger.config"
import mongoose from 'mongoose'

export const databaseConnection = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
    logger.debug(process.env.MONGODB_URI)
    logger.info('connecting to database...')

    mongoose
  .connect(process.env.MONGODB_URI, options)
  .then(() => {
    logger.info('Mongoose connection done')
  })
  .catch((e) => {
    logger.info('Mongoose connection error')
    logger.error(e)
  })

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  logger.debug('Mongoose default connection open to ' + process.env.MONGODB_URI)
})
    
    
// If the connection throws an error
mongoose.connection.on('error', (err) => {
    logger.error('Mongoose default connection error: ' + err)
  })
  
  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose default connection disconnected')
  })
    
    // If the Node process ends, close the Mongoose connection (ctrl + c)
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.info('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  })
}



import { body } from 'express-validator'

export const updatePostValidator = [
  body('title').isString().notEmpty(),
    body('content').isString().notEmpty()
]

import { body } from 'express-validator'

export const updateUserValidator = [
  body('firstName').isString().notEmpty(),
  body('lastName').isString().notEmpty(),
]

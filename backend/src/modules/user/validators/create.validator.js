import { body } from 'express-validator'
import { User } from '../user.model'

export const createUserValidator = [
  body('firstName').isString().notEmpty(),
  body('lastName').isString().notEmpty(),
  body('email')
    .isEmail()
    .custom((value) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          return Promise.reject('E-mail already in use')
        }
      })
    }),
  body('username').custom((value) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject('Username already in use')
      }
    })
  }),
]

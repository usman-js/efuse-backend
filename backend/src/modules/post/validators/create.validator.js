import { body } from 'express-validator'
import { User } from '../../user/user.model';

export const createPostValidator = [
  body('title').isString().notEmpty(),
  body('content').isString().notEmpty(),
  body('user').isString().notEmpty().custom((value) => {
      return User.findById(value).then((user) => {
          console.log('user', user);
      if (!user) {
        return Promise.reject('User not found.')
      }
    })
  }),
]

import { Router } from 'express'
import { create, index, detail, update } from './user.controller'
import { createUserValidator } from './validators/create.validator'
import { updateUserValidator } from './validators/update.validator'

const userRouter = Router()

userRouter.route('/').get(index).post(createUserValidator, create)

userRouter.route('/:userId').get(detail).patch(updateUserValidator, update)

export default userRouter

import httpStatus from 'http-status'
import { errorFormatter } from '../../helpers/error-formatter.helper'
import { User } from './user.model'

export const index = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json({ status: httpStatus[200], message: 'Users List.', data: { users } })
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
  }
}

export const detail = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    if (!user) {
      res.status(204).json({ status: httpStatus[204], message: 'No Record Found' })
    } else {
      res.status(200).json({ status: httpStatus[200], message: 'User Details.', data: { user } })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
  }
}

export const create = async (req, res) => {
  try {
    const errors = errorFormatter(req, res)
    if (errors) return errors
    const user = await User.create(req.body)
    res.status(200).json({ status: httpStatus[200], message: 'User created successfully.', data: { user } })
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
  }
}

export const update = async (req, res) => {
  try {
    const errors = errorFormatter(req, res)
    if (errors) return errors
    const user = await User.findByIdAndUpdate({ _id: req.params.userId }, { ...req.body }, { new: true })
    if (!user) {
      res.status(204).json({ status: httpStatus[204], message: 'No Record Found' })
    } else {
      res.status(200).json({ status: httpStatus[200], message: 'User updated successfully.', data: { user } })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
  }
}

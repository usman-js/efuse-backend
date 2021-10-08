import httpStatus from 'http-status'
import { errorFormatter } from '../../helpers/error-formatter.helper'
import { Post } from './post.model'

export const index = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('user')
    res.status(200).json({ status: httpStatus[200], message: 'Post List.', data: { posts } })
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
  }
}

export const userPosts = async (req, res) => {
    try {
      const posts = await Post.find({user: req.params.userId}).populate('user')
      res.status(200).json({ status: httpStatus[200], message: 'Post List.', data: { posts } })
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
    }
  }

export const detail = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate('user')
    if (!post) {
      res.status(204).json({ status: httpStatus[204], message: 'No Record Found' })
    } else {
      res.status(200).json({ status: httpStatus[200], message: 'Post Details.', data: { post } })
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
    const post = await Post.create(req.body)
    post.populate('user').execPopulate()
    res.status(200).json({ status: httpStatus[200], message: 'Post created successfully.', data: { post } })
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
  }
}

export const update = async (req, res) => {
  try {
    const errors = errorFormatter(req, res)
    if (errors) return errors
    const post = await User.findByIdAndUpdate({ _id: req.params.postId }, { ...req.body }, { new: true })
    post.populate('user').execPopulate()
    if (!post) {
      res.status(204).json({ status: httpStatus[204], message: 'No Record Found' })
    } else {
      res.status(200).json({ status: httpStatus[200], message: 'Post updated successfully.', data: { post } })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ status: httpStatus[500], message: httpStatus['500_MESSAGE'] })
  }
}

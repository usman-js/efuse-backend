import { Router } from 'express'
import { create, index,detail, update, userPosts } from './post.controller'
import { createPostValidator } from './validators/create.validator';
import { updatePostValidator } from './validators/update.validator';

const postRouter = Router()

postRouter.route('/').get(index).post(createPostValidator, create);

postRouter.route('/:postId').get(detail).patch(updatePostValidator, update);

postRouter.route('/user/:userId').get(userPosts)

export default postRouter
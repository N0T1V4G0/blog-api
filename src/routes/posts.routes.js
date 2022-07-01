const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const createBlogPostController = require('../modules/BlogPosts/useCases/createBlogPost');
const getPostController = require('../modules/BlogPosts/useCases/getPost');
const listBlogPostsController = require('../modules/BlogPosts/useCases/listBlogPosts');

const postRouter = Router();

postRouter.post('/', authMiddleware, (req, res, next) => {
  createBlogPostController.handle(req, res, next);
});

postRouter.get('/', authMiddleware, (req, res, next) => {
  listBlogPostsController.handle(req, res, next);
});

postRouter.get('/:id', authMiddleware, (req, res, next) => {
  getPostController.handle(req, res, next);
});

module.exports = postRouter;

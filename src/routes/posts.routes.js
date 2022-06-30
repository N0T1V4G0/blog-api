const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const createBlogPostController = require('../modules/BlogPosts/useCases/createBlogPost');

const postRouter = Router();

postRouter.use('/', authMiddleware, (req, res, next) => {
  createBlogPostController.handle(req, res, next);
});

module.exports = postRouter;

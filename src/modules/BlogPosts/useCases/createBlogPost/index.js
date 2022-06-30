const BlogPostsRepository = require('../../repositories/BlogPostsRepository');
const CreateBlogPostController = require('./createBlogPostController');
const CreateBlogPostService = require('./createBlogPostService');

const blogPostsRepository = new BlogPostsRepository();
const createBlogPostService = new CreateBlogPostService(blogPostsRepository);
const createBlogPostController = new CreateBlogPostController(
  createBlogPostService,
);

module.exports = createBlogPostController;

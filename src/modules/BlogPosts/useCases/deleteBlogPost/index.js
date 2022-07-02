const BlogPostsRepository = require('../../repositories/BlogPostsRepository');
const DeleteBlogPostController = require('./deleteBlogPostController');
const DeleteBlogPostService = require('./deleteBlogPostService');

const blogPostRepository = new BlogPostsRepository();
const deleteBlogPostService = new DeleteBlogPostService(blogPostRepository);
const deleteBlogPostController = new DeleteBlogPostController(
  deleteBlogPostService,
);

module.exports = deleteBlogPostController;

const BlogPostsRepository = require('../../repositories/BlogPostsRepository');
const ListBlogPostsController = require('./ListBlogPostsController');
const ListBlogPostsService = require('./ListBlogPostsService');

const blogPostsRepository = new BlogPostsRepository();
const listBlogPostService = new ListBlogPostsService(blogPostsRepository);
const listBlogPostsController = new ListBlogPostsController(
  listBlogPostService,
);

module.exports = listBlogPostsController;

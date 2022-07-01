const BlogPostsRepository = require('../../repositories/BlogPostsRepository');
const GetPostController = require('./getPostController');
const GetPostService = require('./getPostService');

const blogPostsRepository = new BlogPostsRepository();
const getPostService = new GetPostService(blogPostsRepository);
const getPostController = new GetPostController(getPostService);

module.exports = getPostController;

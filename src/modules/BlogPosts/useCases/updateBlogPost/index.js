const BlogPostsRepository = require('../../repositories/BlogPostsRepository');
const UpdatePostController = require('./updatePostController');
const UpdatePostService = require('./updatePostService');

const blogPostRepo = new BlogPostsRepository();
const updatePostService = new UpdatePostService(blogPostRepo);
const updatePostController = new UpdatePostController(updatePostService);

module.exports = updatePostController;

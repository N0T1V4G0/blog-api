const AppError = require('../../../../errors/AppError');

class DeleteBlogPostService {
  constructor(blogPostRepo) {
    this.blogPostRepo = blogPostRepo;
  }

  async execute(postId, userId) {
    const post = await this.blogPostRepo.findByID(postId);
    if (!post) throw new AppError('Post does not exist', 404);
    if (userId !== post.user.id) {
      throw new AppError('Unauthorized user', 401);
    }
    await this.blogPostRepo.delete(postId);
  }
}

module.exports = DeleteBlogPostService;

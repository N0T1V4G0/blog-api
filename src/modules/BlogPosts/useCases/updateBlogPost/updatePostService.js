const AppError = require('../../../../errors/AppError');

class UpdatePostService {
  constructor(blogPostRepo) {
    this.blogPostRepo = blogPostRepo;
  }

  async execute({ id, title, content }, userId) {
    const post = await this.blogPostRepo.findByID(id);
    if (!post) throw new AppError('Post not found', 404);
    if (userId !== post.user.id) {
      throw new AppError('Unauthorized user', 401);
    }
    await this.blogPostRepo.update({ id, title, content });
    return this.blogPostRepo.findByID(id);
  }
}

module.exports = UpdatePostService;

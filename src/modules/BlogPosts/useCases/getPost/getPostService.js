const AppError = require('../../../../errors/AppError');

class GetPostService {
  constructor(blogPostRepo) {
    this.blogPostRepo = blogPostRepo;
  }

  async execute(id) {
    const post = await this.blogPostRepo.findByID(id);
    if (!post) throw new AppError('Post does not exist', 404);
    return post;
  }
}

module.exports = GetPostService;

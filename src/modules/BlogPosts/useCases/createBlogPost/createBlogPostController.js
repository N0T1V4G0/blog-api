const AppError = require('../../../../errors/AppError');

class CreateBlogPostController {
  constructor(createBlodPostService) {
    this.createBlogPostService = createBlodPostService;
  }

  async handle(req, res, next) {
    try {
      const { title, content, categoryIds } = req.body;
      if (!(title && content && categoryIds)) {
        throw new AppError('Some required fields are missing');
      }
      const newBlogPost = await this.createBlogPostService.execute(req.body);
      return res.status(201).json(newBlogPost);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CreateBlogPostController;

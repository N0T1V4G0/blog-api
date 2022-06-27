class CreateBlogPostController {
  constructor(createBlodPostService) {
    this.createBlogPostService = createBlodPostService;
  }

  async handle(req, res, next) {
    try {
      const newBlogPost = this.createBlogPostService.execute(req.body);
      return res.status(201).json(newBlogPost);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CreateBlogPostController;

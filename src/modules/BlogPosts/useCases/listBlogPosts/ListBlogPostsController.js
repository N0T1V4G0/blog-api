class ListBlogPostsController {
  constructor(listBlogPostService) {
    this.listBlogPostService = listBlogPostService;
  }

  async handle(_req, res, next) {
    try {
      const posts = await this.listBlogPostService.execute();
      return res.status(200).json(posts);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ListBlogPostsController;

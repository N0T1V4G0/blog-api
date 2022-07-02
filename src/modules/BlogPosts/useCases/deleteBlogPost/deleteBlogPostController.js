class DeleteBlogPostController {
  constructor(deletePostService) {
    this.deletePostService = deletePostService;
  }

  async handle(req, res, next) {
    try {
      const userId = req.user.id * 1;
      const { id } = req.params;
      await this.deletePostService.execute(id, userId);
      return res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = DeleteBlogPostController;

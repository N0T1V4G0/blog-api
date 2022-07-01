class GetPostController {
  constructor(getPostService) {
    this.getPostService = getPostService;
  }

  async handle(req, res, next) {
    try {
      const id = req.params.id * 1;
      const post = await this.getPostService.execute(id * 1);
      return res.status(200).json(post);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = GetPostController;

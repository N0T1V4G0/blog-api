const AppError = require('../../../../errors/AppError');

class UpdatePostController {
  constructor(updatePostService) {
    this.updatePostService = updatePostService;
  }

  async handle(req, res, next) {
    try {
      const { title, content } = req.body;
      const id = req.params.id * 1;
      if (!(title && content)) {
        throw new AppError('Some required fields are missing');
      }
      const post = await this.updatePostService.execute(
        { id, title, content },
        req.user.id,
      );
      return res.status(200).json(post);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UpdatePostController;

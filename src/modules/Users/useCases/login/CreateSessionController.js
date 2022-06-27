const AppError = require('../../../../errors/AppError');

class CreateSessionController {
  constructor(createSessionService) {
    this.createSessionService = createSessionService;
  }

  async handle(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!(email && password)) throw new AppError('Some required fields are missing');
      const token = await this.createSessionService.execute(req.body);
      return res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CreateSessionController;

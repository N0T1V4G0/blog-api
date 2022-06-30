class CreateUserController {
  constructor(createUserService) {
    this.createUserService = createUserService;
  }

  async handle(req, res, next) {
    try {
      const token = await this.createUserService.execute(req.body);
      return res.status(201).json({ token });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CreateUserController;

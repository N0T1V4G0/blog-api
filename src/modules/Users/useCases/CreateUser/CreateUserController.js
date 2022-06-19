class CreateUserController {
  constructor(createUserService) {
    this.createUserService = createUserService;
  }

  async handle(req, res, next) {
    try {
      const newUser = await this.createUserService.execute(req.body);
      return res.status(201).json(newUser);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CreateUserController;

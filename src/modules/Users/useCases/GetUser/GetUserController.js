class GetUserController {
  constructor(getUserService) {
    this.getUserService = getUserService;
  }

  async handle(req, res, next) {
    try {
      const id = req.params.id * 1;
      const user = await this.getUserService.execute(id);
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = GetUserController;

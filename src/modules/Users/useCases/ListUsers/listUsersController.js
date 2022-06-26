class ListUsersController {
  constructor(listUsersService) {
    this.listUsersService = listUsersService;
  }

  async handle(_req, res, next) {
    try {
      const users = await this.listUsersService.execute();
      return res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ListUsersController;

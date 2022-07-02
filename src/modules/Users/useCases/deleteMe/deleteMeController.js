class DeleteMeController {
  constructor(deleteMeService) {
    this.deleteMeService = deleteMeService;
  }

  async handle(req, res, next) {
    try {
      await this.deleteMeService.execute(req.user.id);
      return res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = DeleteMeController;

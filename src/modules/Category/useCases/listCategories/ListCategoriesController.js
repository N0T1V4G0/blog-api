class ListCategoriesController {
  constructor(listCategoriesService) {
    this.listCategoriesService = listCategoriesService;
  }

  async handle(_req, res, next) {
    try {
      const categories = await this.listCategoriesService.execute();
      return res.status(200).json(categories);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ListCategoriesController;

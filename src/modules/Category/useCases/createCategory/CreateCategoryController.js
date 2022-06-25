class CreateCategoryController {
  constructor(createCategoryService) {
    this.createCategoryService = createCategoryService;
  }

  async handle(req, res, next) {
    try {
      const newCategory = await this.createCategoryService.execute(
        req.body.name,
      );
      return res.status(201).json(newCategory);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CreateCategoryController;

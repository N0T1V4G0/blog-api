class CreateCategoryService {
  constructor(categoryRepo) {
    this.categoriesRepo = categoryRepo;
  }

  async execute(category) {
    return this.categoriesRepo.create(category);
  }
}

module.exports = CreateCategoryService;

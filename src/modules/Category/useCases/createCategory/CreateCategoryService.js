class CreateCategoryService {
  constructor(categoryRepo) {
    this.categoriesRepo = categoryRepo;
  }

  async execute(categoryName) {
    return this.categoriesRepo.create(categoryName);
  }
}

module.exports = CreateCategoryService;

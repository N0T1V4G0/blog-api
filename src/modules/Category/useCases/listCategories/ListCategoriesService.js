class ListCategoriesService {
  constructor(categoriesRepository) {
    this.categoriesRepo = categoriesRepository;
  }

  async execute() {
    return this.categoriesRepo.list();
  }
}

module.exports = ListCategoriesService;

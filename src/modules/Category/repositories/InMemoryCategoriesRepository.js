class InMemoryCategoriesRepository {
  constructor() {
    this.repository = [];
  }

  async create(categoryName) {
    const id = Math.floor(Math.random() * 6000) + 1;
    const newCategory = { id, name: categoryName };
    this.repository.push(newCategory);
    return newCategory;
  }
}

const inMemoryCategoriesRepo = new InMemoryCategoriesRepository();
Object.freeze(inMemoryCategoriesRepo);

module.exports = inMemoryCategoriesRepo;

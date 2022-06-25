const { Category } = require('../../../database/models');

class CategoriesRepository {
  constructor() {
    this.repository = Category;
  }

  async create(categoryName) {
    return this.repository.create(categoryName);
  }
}

module.exports = CategoriesRepository;

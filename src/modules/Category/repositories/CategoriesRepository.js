const { Category } = require('../../../database/models');

class CategoriesRepository {
  constructor() {
    this.repository = Category;
  }

  async create(category) {
    return this.repository.create(category);
  }
}

module.exports = CategoriesRepository;

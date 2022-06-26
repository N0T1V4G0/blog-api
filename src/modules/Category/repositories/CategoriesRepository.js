const { Category } = require('../../../database/models');

class CategoriesRepository {
  constructor() {
    this.repository = Category;
  }

  async create(category) {
    return this.repository.create(category);
  }

  async list() {
    return this.repository.findAll();
  }
}

module.exports = CategoriesRepository;

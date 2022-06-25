// const CategoriesRepository = require('../repositories/CategoriesRepository');
const inMemoryCategoriesRepo = require('../../repositories/InMemoryCategoriesRepository');
const CreateCategoryController = require('./CreateCategoryController');
const CreateCategoryService = require('./CreateCategoryService');

// const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(inMemoryCategoriesRepo);
const createCategoryController = new CreateCategoryController(
  createCategoryService,
);

module.exports = createCategoryController;

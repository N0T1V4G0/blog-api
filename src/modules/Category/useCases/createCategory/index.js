const CategoriesRepository = require('../../repositories/CategoriesRepository');
const CreateCategoryController = require('./CreateCategoryController');
const CreateCategoryService = require('./CreateCategoryService');

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService,
);

module.exports = createCategoryController;

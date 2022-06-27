const CategoriesRepository = require('../../repositories/CategoriesRepository');
const ListCategoriesController = require('./ListCategoriesController');
const ListCategoriesService = require('./ListCategoriesService');

const categoriesRepository = new CategoriesRepository();
const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesService,
);

module.exports = listCategoriesController;

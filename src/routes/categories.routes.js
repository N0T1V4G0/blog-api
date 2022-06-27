const { Router } = require('express');
const validateCategoryBody = require('../middlewares/validateCategoryBody');
const createCategoryController = require('../modules/Category/useCases/createCategory');
const listCategoriesController = require('../modules/Category/useCases/listCategories');

const categoriesRouter = Router();

categoriesRouter.post('/', validateCategoryBody, (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

categoriesRouter.get('/', (req, res, next) => {
  listCategoriesController.handle(req, res, next);
});

module.exports = categoriesRouter;

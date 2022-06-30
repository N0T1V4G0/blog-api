const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const validateCategoryBody = require('../middlewares/validateCategoryBody');
const createCategoryController = require('../modules/Category/useCases/createCategory');
const listCategoriesController = require('../modules/Category/useCases/listCategories');

const categoriesRouter = Router();

categoriesRouter.post(
  '/',
  validateCategoryBody,
  authMiddleware,
  (req, res, next) => {
    createCategoryController.handle(req, res, next);
  },
);

categoriesRouter.get('/', authMiddleware, (req, res, next) => {
  listCategoriesController.handle(req, res, next);
});

module.exports = categoriesRouter;

const { Router } = require('express');
const createCategoryController = require('../modules/Category/useCases/createCategory');

const categoriesRouter = Router();

categoriesRouter.post('/', (req, res, next) => {
  createCategoryController.handle(req, res, next);
});

module.exports = categoriesRouter;

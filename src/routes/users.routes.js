const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const validateUserBody = require('../middlewares/validateUserBody');
const createUserController = require('../modules/Users/useCases/CreateUser');
const getUserController = require('../modules/Users/useCases/GetUser');
const listUsersController = require('../modules/Users/useCases/ListUsers');

const usersRouter = Router();

usersRouter.post('/', validateUserBody, (req, res, next) => {
  createUserController.handle(req, res, next);
});

usersRouter.get('/', authMiddleware, (req, res, next) => {
  listUsersController.handle(req, res, next);
});

usersRouter.get('/:id', authMiddleware, (req, res, next) => {
  getUserController.handle(req, res, next);
});

module.exports = usersRouter;

const { Router } = require('express');
const createUserController = require('../modules/Users/useCases/CreateUser');
const getUserController = require('../modules/Users/useCases/GetUser');
const listUsersController = require('../modules/Users/useCases/ListUsers');

const usersRouter = Router();

usersRouter.post('/', (req, res, next) => {
  createUserController.handle(req, res, next);
});

usersRouter.get('/', (req, res, next) => {
  listUsersController.handle(req, res, next);
});

usersRouter.get('/:id', (req, res, next) => {
  getUserController.handle(req, res, next);
});

module.exports = usersRouter;

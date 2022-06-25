const { Router } = require('express');
const createUserController = require('../modules/Users/useCases/CreateUser');

const usersRouter = Router();

usersRouter.post('/', (req, res, next) => {
  createUserController.handle(req, res, next);
});

module.exports = usersRouter;

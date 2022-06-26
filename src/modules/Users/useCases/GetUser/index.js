const inMemoryUsersRepo = require('../../repositories/InMemoryUsersRepository');
const GetUserController = require('./GetUserController');
const GetUserService = require('./GetUserService');

const getUserService = new GetUserService(inMemoryUsersRepo);
const getUserController = new GetUserController(getUserService);

module.exports = getUserController;

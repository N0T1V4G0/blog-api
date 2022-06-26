const UsersRepository = require('../../repositories/UsersRepository');
const GetUserController = require('./GetUserController');
const GetUserService = require('./GetUserService');

const usersRepository = new UsersRepository();
const getUserService = new GetUserService(usersRepository);
const getUserController = new GetUserController(getUserService);

module.exports = getUserController;

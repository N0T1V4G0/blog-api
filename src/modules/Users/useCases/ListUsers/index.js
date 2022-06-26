const UsersRepository = require('../../repositories/UsersRepository');
const ListUsersController = require('./listUsersController');
const ListUsersService = require('./listUsersService');

const usersRepository = new UsersRepository();
const listUsersService = new ListUsersService(usersRepository);
const listUsersController = new ListUsersController(listUsersService);

module.exports = listUsersController;

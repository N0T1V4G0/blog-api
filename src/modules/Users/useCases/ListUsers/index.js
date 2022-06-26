const inMemoryUsersRepo = require('../../repositories/InMemoryUsersRepository');
const ListUsersController = require('./listUsersController');
const ListUsersService = require('./listUsersService');

const listUsersService = new ListUsersService(inMemoryUsersRepo);
const listUsersController = new ListUsersController(listUsersService);

module.exports = listUsersController;

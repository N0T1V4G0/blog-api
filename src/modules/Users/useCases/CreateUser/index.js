const inMemoryUsersRepository = require('../../repositories/InMemoryUsersRepository');
const CreateUserController = require('./CreateUserController');
const CreateUserService = require('./CreateUserService');

// const userRepository = new UsersRepository();
const createUserService = new CreateUserService(inMemoryUsersRepository);
const createUserController = new CreateUserController(createUserService);

module.exports = createUserController;

const UsersRepository = require('../../repositories/UsersRepository');
const CreateUserController = require('./CreateUserController');
const CreateUserService = require('./CreateUserService');

const userRepository = new UsersRepository();
const createUserService = new CreateUserService(userRepository);
const createUserController = new CreateUserController(createUserService);

module.exports = createUserController;

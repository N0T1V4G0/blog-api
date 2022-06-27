const UsersRepository = require('../../repositories/UsersRepository');
const CreateSessionController = require('./CreateSessionController');
const CreateSessionService = require('./CreateSessionService');

const usersRepository = new UsersRepository();
const createSessionService = new CreateSessionService(usersRepository);
const createSessionController = new CreateSessionController(
  createSessionService,
);

module.exports = createSessionController;

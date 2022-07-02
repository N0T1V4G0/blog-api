const UsersRepository = require('../../repositories/UsersRepository');
const DeleteMeController = require('./deleteMeController');
const DeleteMeService = require('./deleteMeService');

const usersRepository = new UsersRepository();

const deleteMeService = new DeleteMeService(usersRepository);

const deleteMeController = new DeleteMeController(deleteMeService);

module.exports = deleteMeController;

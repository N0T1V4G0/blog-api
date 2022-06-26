const AppError = require('../../../../errors/AppError');

class GetUserService {
  constructor(usersRepository) {
    this.usersRepo = usersRepository;
  }

  async execute(id) {
    const user = await this.usersRepo.findByID(id);
    if (!user) throw new AppError('User does not exist', 404);
    return user;
  }
}

module.exports = GetUserService;

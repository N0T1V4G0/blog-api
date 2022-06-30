const AppError = require('../../../../errors/AppError');
const createTokenJWT = require('../../../../utils/createTokenJWT');

class CreateSessionService {
  constructor(usersRepository) {
    this.usersRepo = usersRepository;
  }

  async execute(loginData) {
    const user = await this.usersRepo.getByEmailPassword(loginData);
    if (!user) throw new AppError('Invalid fields');
    const token = createTokenJWT(user);
    return token;
  }
}

module.exports = CreateSessionService;

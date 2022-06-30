const AppError = require('../../../../errors/AppError');
const createTokenJWT = require('../../../../utils/createTokenJWT');

class CreateUserService {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async execute(user) {
    const userAlreadyExists = await this.userRepo.findByEmail(user.email);
    if (userAlreadyExists) throw new AppError('User already registered', 409);
    const userData = await this.userRepo.create(user);
    const token = createTokenJWT(userData);
    return token;
  }
}

module.exports = CreateUserService;

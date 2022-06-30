require('dotenv').config();
const jwt = require('jsonwebtoken');
const AppError = require('../../../../errors/AppError');

class CreateUserService {
  constructor(userRepository) {
    this.userRepo = userRepository;
    this.token = '';
  }

  async execute(user) {
    const userAlreadyExists = await this.userRepo.findByEmail(user.email);
    if (userAlreadyExists) throw new AppError('User already registered', 409);
    const userData = await this.userRepo.create(user);
    this.generateToken(userData.dataValues);
    return this.token;
  }

  generateToken({ password, ...userWithoutPass }) {
    const jwtSecret = process.env.JWT_SECRET;
    const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
    const token = jwt.sign({ data: { userWithoutPass } }, jwtSecret, jwtConfig);
    this.token = token;
  }
}

module.exports = CreateUserService;

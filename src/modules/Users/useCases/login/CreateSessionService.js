require('dotenv').config();
const jwt = require('jsonwebtoken');
const AppError = require('../../../../errors/AppError');

class CreateSessionService {
  constructor(usersRepository) {
    this.usersRepo = usersRepository;
    this.token = '';
  }

  async execute(loginData) {
    const user = await this.usersRepo.getByEmailPassword(loginData);
    if (!user) throw new AppError('Invalid fields');
    this.generateToken(user.dataValues);
    return this.token;
  }

  generateToken({ password, ...userWithoutPass }) {
    const jwtSecret = process.env.JWT_SECRET;
    const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
    const token = jwt.sign({ data: { userWithoutPass } }, jwtSecret, jwtConfig);
    this.token = token;
  }
}

module.exports = CreateSessionService;

const AppError = require('../../../../errors/AppError');

class CreateUserService {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async execute({ displayName, email, password, image }) {
    const userAlreadyExists = await this.userRepo.findByEmail(email);
    console.log(userAlreadyExists);
    if (userAlreadyExists) throw new AppError('User already registered', 409);
    return this.userRepo.create({
      displayName,
      email,
      password,
      image,
    });
  }
}

module.exports = CreateUserService;

class CreateUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ displayName, email, password, image }) {
    return this.userRepository.create({
      displayName,
      email,
      password,
      image,
    });
  }
}

module.exports = CreateUserService;

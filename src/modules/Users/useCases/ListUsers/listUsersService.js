class ListUsersService {
  constructor(userRepository) {
    this.userRepo = userRepository;
  }

  async execute() {
    return this.userRepo.list();
  }
}

module.exports = ListUsersService;

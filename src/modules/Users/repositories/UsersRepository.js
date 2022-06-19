const { User } = require('../../../database/models');

class UsersRepository {
  constructor() {
    this.repository = User;
  }

  async create(user) {
    return this.repository.create(user);
  }
}

module.exports = UsersRepository;

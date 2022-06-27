const { User } = require('../../../database/models');

class UsersRepository {
  constructor() {
    this.repository = User;
  }

  async create(user) {
    return this.repository.create(user);
  }

  async findByEmail(email) {
    return this.repository.findOne({ where: { email } });
  }

  async list() {
    return this.repository.findAll();
  }

  async findByID(id) {
    return this.repository.findByPk(id);
  }

  async getByEmailPassword({ email, password }) {
    return this.repository.findOne({ where: { email, password } });
  }
}

module.exports = UsersRepository;

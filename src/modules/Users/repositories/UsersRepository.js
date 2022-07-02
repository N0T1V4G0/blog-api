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
    return this.repository.findAll({ attributes: { exclude: ['password'] } });
  }

  async findByID(id) {
    return this.repository.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
  }

  async getByEmailPassword({ email, password }) {
    return this.repository.findOne({
      where: { email, password },
      attributes: { exclude: ['password'] },
    });
  }

  async delete(id) {
    await this.repository.destroy({ where: { id } });
  }
}

module.exports = UsersRepository;

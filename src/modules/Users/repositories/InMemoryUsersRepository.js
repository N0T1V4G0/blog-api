class InMemoryUsersRepository {
  constructor() {
    this.repository = [];
  }

  async create(user) {
    const { displayName, email, password, image } = user;
    const id = Math.floor(Math.random() * 9999) + 1;
    const newUser = { id, displayName, email, password, image };
    this.repository.push(newUser);
    return newUser;
  }

  async findByEmail(email) {
    return this.repository.find((e) => e.email === email);
  }

  async list() {
    return this.repository.map((e) => {
      delete e.password;
      return e;
    });
  }

  async findByID(id) {
    const user = this.repository.find((e) => e.id === id);
    return user;
  }
}

const inMemoryUsersRepo = new InMemoryUsersRepository();
Object.freeze(inMemoryUsersRepo);

module.exports = inMemoryUsersRepo;

class DeleteMeService {
  constructor(usersRepo) {
    this.usersRepo = usersRepo;
  }

  async execute(id) {
    await this.usersRepo.delete(id);
  }
}

module.exports = DeleteMeService;

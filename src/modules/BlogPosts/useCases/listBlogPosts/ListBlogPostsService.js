class ListBlogPostsService {
  constructor(blogPostRepo) {
    this.blogPostRepo = blogPostRepo;
  }

  async execute() {
    return this.blogPostRepo.list();
  }
}

module.exports = ListBlogPostsService;

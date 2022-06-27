class CreateBlogPostService {
  constructor(blogPostsRepository) {
    this.blogPostsRepo = blogPostsRepository;
  }

  async execute(blogPost) {
    return this.blogPostsRepo.create(blogPost);
  }
}

module.exports = CreateBlogPostService;

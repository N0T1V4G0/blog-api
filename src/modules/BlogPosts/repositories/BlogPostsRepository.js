const db = require('../../../database/models');
const { BlogPost } = require('../../../database/models');
const { Category } = require('../../../database/models');
const { PostCategory } = require('../../../database/models');
const AppError = require('../../../errors/AppError');

class BlogPostsRepository {
  constructor() {
    this.repository = BlogPost;
    this.category = Category;
    this.postCategory = PostCategory;
    this.sequelize = db.sequelize;
  }

  async create(blogPost) {
    // const t = await this.sequelize.transaction();
    const { count, rows } = await this.category.findAndCountAll({
      where: { id: blogPost.categoryIds },
    });

    if (count < 1) throw new AppError('"categoryIds" not found');

    const post = await this.repository.create(blogPost);

    rows.forEach(async (r) => {
      await this.postCategory.create({
        postId: post.id,
        categoryId: r.id,
      });
    });

    return post;
  }
}

module.exports = BlogPostsRepository;

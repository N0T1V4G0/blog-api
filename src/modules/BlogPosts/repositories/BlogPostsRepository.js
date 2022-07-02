const {
  BlogPost,
  Category,
  User,
  PostCategory,
} = require('../../../database/models');
const AppError = require('../../../errors/AppError');

class BlogPostsRepository {
  constructor() {
    this.repository = BlogPost;
    this.category = Category;
    this.postCategory = PostCategory;
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

  async list() {
    const posts = await this.repository.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });
    return posts;
  }

  async findByID(id) {
    const post = await this.repository.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });
    return post;
  }

  async update({ title, content, id }) {
    await this.repository.update(
      { title, content },
      {
        where: { id },
      },
      { fields: ['title', 'content'] },
    );
  }

  async delete(id) {
    await this.repository.destroy({ where: { id } });
  }
}

module.exports = BlogPostsRepository;

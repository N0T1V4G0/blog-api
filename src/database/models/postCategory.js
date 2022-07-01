const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      as: 'categories',
      foreignKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      as: 'posts',
      foreignKey: 'categoryId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;

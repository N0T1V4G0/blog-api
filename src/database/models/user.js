'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId',
    });
  };
  return User;
};

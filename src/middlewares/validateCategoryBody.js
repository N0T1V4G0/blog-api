const Joi = require('joi');
const AppError = require('../errors/AppError');

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const validateCategoryBody = (req, _res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

module.exports = validateCategoryBody;

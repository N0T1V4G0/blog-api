const Joi = require('joi');
const AppError = require('../errors/AppError');

const productSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateUserBody = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

module.exports = validateUserBody;

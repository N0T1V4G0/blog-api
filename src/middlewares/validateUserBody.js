const Joi = require('joi');
const AppError = require('../errors/AppError');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateUserBody = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

module.exports = validateUserBody;

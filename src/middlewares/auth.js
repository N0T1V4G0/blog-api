const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) throw new AppError('Token not found', 401);

    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded.data;
    } catch (e) {
      throw new AppError('Expired or invalid token', 401);
    }

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = authMiddleware;

const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createTokenJWT = (payload) =>
  jwt.sign({ data: payload }, jwtSecret, jwtConfig);

module.exports = createTokenJWT;

const jwt = require('jsonwebtoken');

// const jwtSecret = process.env.JWT_SECRET;

// const jwtConfig = {
//   expiresIn: '1d',
//   algorithm: 'HS256',
// };

const createTokenJWT = ({ password, ...userWithoutPass }) => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  const token = jwt.sign({ data: { ...userWithoutPass } }, jwtSecret, jwtConfig);
  return token;
};

module.exports = createTokenJWT;

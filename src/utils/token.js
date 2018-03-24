const boom = require('boom');
const jwt = require('jsonwebtoken');

const decodeToken = (token) => {
  const usefulToken = token.split(' ')[1];
  const jwtKey = process.env.JWT_KEY;

  return jwt.verify(usefulToken, jwtKey);
};

const decryptData = (token) => {
  const data = decodeToken(token);
  if (data) {
    return data;
  }

  throw boom.badRequest(this, 'User not authenticated');
};

const encryptData = (data) => {
  const jwtKey = process.env.JWT_KEY;
  return jwt.sign(data, jwtKey);
};

module.exports = {
  decryptData,
  encryptData,
};

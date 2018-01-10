import jwt from 'jsonwebtoken';
import Boom from 'boom';

const createJwtToken = user =>
  new Promise((resolve, reject) => {
    if (!user) {
      throw Boom.badRequest('Email ou senha inválido. Tente novamente por favor.');
    }

    const token = jwt.sign(
      {
        username: user.email,
        id: user.id,
      },
      process.env.JWT_KEY,
    );

    if (token) {
      resolve(token);
    }

    reject('Ops! Token não criado');
  });

export default createJwtToken;

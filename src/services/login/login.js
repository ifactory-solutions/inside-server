import Boom from 'boom';
import { getUserByEmailAndPassword } from '../user';
import { createJwtToken } from '../auth';

const loginService = async data => {
  if (!data.email || !data.password) {
    throw Boom.badRequest('Dados Inválidos');
  }
  const user = await getUserByEmailAndPassword(data.email, data.password);
  const jwt = await createJwtToken(user);
  return {
    token: jwt,
  };
};

export default loginService;

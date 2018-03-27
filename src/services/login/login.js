import Boom from 'boom';
import { UserService } from '../user';
import { createJwtToken } from '../auth';

const loginService = async (data) => {
  console.error(data);
  if (!data.email || !data.password) {
    throw Boom.badRequest('Dados Inválidos');
  }
  const user = await UserService.findWithCredentials(data.email, data.password);
  const jwt = await createJwtToken(user);
  return {
    token: jwt,
  };
};

export default loginService;

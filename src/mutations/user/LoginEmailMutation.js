import User from '../../model/user';
import { generateToken } from '../../auth';

const LoginEmailMutation = async (root, args) => {
  const { email, password } = args;
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    return {
      token: null,
      error: 'INVALID_EMAIL_PASSWORD',
    };
  }

  const correctPassword = user.authenticate(password);

  if (!correctPassword) {
    return {
      token: null,
      error: 'INVALID_EMAIL_PASSWORD',
    };
  }

  return {
    token: generateToken(user),
    error: null,
  };
};

export default LoginEmailMutation;

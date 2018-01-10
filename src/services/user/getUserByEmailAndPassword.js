import Sequelize from 'sequelize';
import { encrypt } from '../../utils';
import { User } from '../../db/models';

const Op = Sequelize.Op;

const getUserByEmailAndPassword = async (email, password) => {
  const hash = encrypt(password);
  return User.findOne({
    where: {
      email: {
        [Op.eq]: email,
      },
      password: {
        [Op.eq]: hash,
      },
    },
  });
};

export default getUserByEmailAndPassword;

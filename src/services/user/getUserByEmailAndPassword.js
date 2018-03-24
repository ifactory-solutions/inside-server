import Sequelize from 'sequelize';
import { encrypt } from '../../utils';
import { User, Role, Permission } from '../../db/models';

const { Op } = Sequelize;
const associations = [
  {
    model: Role,
    as: 'roles',
    include: [
      {
        model: Permission,
        as: 'permissions',
        through: { attributes: [] },
      },
    ],
    through: { attributes: [] },
  },
];

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
    include: associations,
  });
};

export default getUserByEmailAndPassword;

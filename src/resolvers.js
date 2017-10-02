import UserMutations from './mutations/user';
import UserQueries from './queries/user';

const resolveFunctions = {
  Query: {
    ...UserQueries,
  },
  Mutation: {
    ...UserMutations,
  },
};

export default resolveFunctions;

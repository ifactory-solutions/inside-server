import { makeExecutableSchema } from 'graphql-tools';

// resolvers
import resolvers from './resolvers';
// models
import user from './model/user/schema';

const schema = `
  ${user}

  type Token {
    token: String,
    error: String
  }

  # the schema allows the following query:
  type Query {
    users: [User]
  }
  # this schema allows the following mutation:
  type Mutation {
    RegisterEmail (name: String, email: String, password: String): Token
  }
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

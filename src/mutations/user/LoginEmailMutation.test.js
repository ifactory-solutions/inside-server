import { graphql } from 'graphql';
import { generateToken } from '../../auth';
import { setupTest } from '../../../test/helper';
import schema from '../../schema';
import User from '../../model/user';

beforeEach(async () => await setupTest());

it('should not login if email is not in the database', async () => {
  const query = `
    mutation {
      LoginEmail(email: "awesome@example.com", password: "awesome") {
        token
        error
      }
    }
  `;

  const result = await graphql(schema, query);
  const { LoginEmail } = result.data;

  expect(LoginEmail.token).toBe(null);
  expect(LoginEmail.error).toBe('INVALID_EMAIL_PASSWORD');
});

it('should not login with wrong password', async () => {
  const user = new User({
    name: 'user',
    email: 'awesome@example.com',
    password: 'awesome',
  });
  await user.save();

  const query = `
    mutation M {
      LoginEmail(email: "awesome@example.com", password: "notawesome") {
        token
        error
      }
    }
  `;

  const result = await graphql(schema, query);
  const { LoginEmail } = result.data;

  expect(LoginEmail.token).toBe(null);
  expect(LoginEmail.error).toBe('INVALID_EMAIL_PASSWORD');
});

it('should not login with wrong email', async () => {
  const user = new User({
    name: 'user',
    email: 'awesome@example.com',
    password: 'awesome',
  });
  await user.save();

  const query = `
    mutation M {
      LoginEmail(email: "awesome2@example.com", password: "awesome") {
        token
        error
      }
    }
  `;

  const result = await graphql(schema, query);
  const { LoginEmail } = result.data;

  expect(LoginEmail.token).toBe(null);
  expect(LoginEmail.error).toBe('INVALID_EMAIL_PASSWORD');
});

it('should generate token when email and password is correct', async () => {
  const email = 'awesome@example.com';
  const password = 'awesome';

  const user = new User({
    name: 'user',
    email,
    password,
  });
  await user.save();

  const query = `
  mutation M {
    LoginEmail(email: "awesome@example.com", password: "awesome") {
      token
      error
    }
  }
`;

  const result = await graphql(schema, query);
  const { LoginEmail } = result.data;

  expect(LoginEmail.token).toBe(generateToken(user));
  expect(LoginEmail.error).toBe(null);
});

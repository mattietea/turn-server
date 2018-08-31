import { AuthenticationError, UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import { getJwt } from '../../utility/auth.utility';
import { getError, getText } from '../../utility/text.utility';
import { validate } from '../../utility/validate.utility';
import { User } from '../user/user.model';
import { authSignInValidator } from './auth.validation';

const Query = {
  authTest: () => {
    return 'Auth query is working!';
  }
};

const Mutation = {
  authTest: (root, { test }) => {
    return `Auth mutation is working: ${test}`;
  },
  authSignIn: async (root, { email, password }) => {
    const [error, valid] = await validate(authSignInValidator, {
      email,
      password
    });
    if (!valid) throw new UserInputError('Invalid Input', { error });

    const user = await User.findOne({ email }).exec();
    if (!user) throw new AuthenticationError(getText.notFound('user', 'email'));

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new AuthenticationError(getError.invalidCredentials);

    return getJwt(user._id);
  }
};

export default { Query, Mutation };

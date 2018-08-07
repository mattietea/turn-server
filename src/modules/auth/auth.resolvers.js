import { AuthenticationError } from 'apollo-server-core';
import bcrypt from 'bcryptjs';
import { getJwt } from '../../utility/auth.utility';
import { getError, getText } from '../../utility/text.service';
import { User } from '../user/user.model';

const Query = {
  authTest: () => {
    return 'Auth query is working!';
  },
  authSignIn: async (root, { email, password }) => {
    const user = await User.findOne({ email }).exec();
    if (!user) throw new AuthenticationError(getText.notFound('user', 'email'));

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new AuthenticationError(getError.invalidCredentials);

    return getJwt(user._id);
  }
};

const Mutation = {
  authTest: (root, { test }) => {
    return `Auth mutation is working: ${test}`;
  }
};

export default { Query, Mutation };

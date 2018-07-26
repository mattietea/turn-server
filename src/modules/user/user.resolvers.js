import { ApolloError } from 'apollo-server';
import { User } from './user.model';
import { userText } from './user.text';

const Query = {
  userTest: () => {
    return 'User query is working';
  },
  userFindById: (object, { _id }) => {
    return User.findById(_id);
  },
  userFindOne: (object, { user }) => {
    return User.findOne(user);
  },
  userFindMany: (object, { user }) => {
    return User.find(user);
  }
};

const Mutation = {
  userTest: (object, { test }) => {
    return `User mutation is working: ${test}`;
  },
  userCreate: async (object, { user }) => {
    const exists = await User.findOne({ email: user.email }).exec();
    if (exists) throw new ApolloError(userText.duplicate);
    return new User(user).save();
  },
  userUpdateById: async (object, { _id, user }) => {
    const doc = await User.findById(_id).exec();
    if (!doc) throw new ApolloError(userText.invalidId);
    return doc.set(user).save();
  }
};

export default { Query, Mutation };

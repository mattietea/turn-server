import { ApolloError, UserInputError } from 'apollo-server';
import { validate } from '../../services/utilities/index.utility';
import { User } from './user.model';
import { userText } from './user.text';
import { userCreateValidator, userUpdateValidator } from './user.validation';

const Query = {
  userTest: () => {
    return 'User query is working!';
  },
  userFindOne: (root, { user }) => {
    return User.findOne(user);
  },
  userFindMany: (root, { user }) => {
    return User.find(user);
  },
  userFindById: (root, { _id }) => {
    return User.findById(_id);
  },
  userFindManyById: (root, { _ids }) => {
    return User.find({ _id: { $in: _ids } });
  }
};

const Mutation = {
  userTest: (root, { test }) => {
    return `User mutation is working: ${test}`;
  },

  userCreate: async (root, { user }) => {
    const [error, valid] = await validate(userCreateValidator, user);
    if (!valid) throw new UserInputError(userText.invalidInput, error);

    const exists = await User.findOne({ email: user.email }).exec();
    if (exists) throw new ApolloError(userText.duplicate);

    return new User(user).save();
  },

  userUpdateById: async (root, { _id, user }) => {
    const [error, valid] = await validate(userUpdateValidator, user);
    if (!valid) throw new UserInputError(userText.invalidInput, error);

    const doc = await User.findById(_id).exec();
    if (!doc) throw new ApolloError(userText.invalidId);
    return doc.set(user).save();
  },

  userRemoveById: async (root, { _id }) => {
    const doc = await User.findByIdAndRemove(_id).exec();
    return !!doc;
  }
};

export default { Query, Mutation };

import { ApolloError } from 'apollo-server-express';
import { getText } from '../../utility/text.service';
import { User } from './user.model';

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
    // const [error, valid] = await to(validate(userCreateValidator));
    // if (!valid) throw new UserInputError(getError.invalidInputs, error);

    const exists = await User.findOne({ email: user.email }).exec();
    if (exists) throw new ApolloError(getText.duplicate('user', 'email'));

    return new User(user).save();
  },
  userUpdateById: async (root, { _id, user }) => {
    // const [error, valid] = await to(validate(userUpdateValidator));
    // if (!valid) throw new UserInputError(getError.invalidInputs, error);

    const doc = await User.findById(_id).exec();
    if (!doc) throw new ApolloError(getText.notFound('user', 'id'));

    return doc.set(user).save();
  },
  userRemoveById: async (root, { _id }) => {
    const doc = await User.findByIdAndRemove(_id).exec();
    return !!doc;
  }
};

export default { Query, Mutation };

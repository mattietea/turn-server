import { ApolloError } from 'apollo-server';
import { User } from './user.model';
import { userText } from './user.text';

const create = async (object, { user }) => {
  const exists = await User.findOne({ email: user.email }).exec();
  if (exists) throw new ApolloError(userText.duplicate);

  return new User(user).save();
};

const findById = (object, { _id }) => {
  return User.findById(_id);
};

const findOne = (object, { user }) => {
  return User.findOne(user);
};

const findMany = (object, { user }) => {
  return User.find(user);
};

const Query = {
  userTest: () => 'User query is working',
  userFindById: findById,
  userFindOne: findOne,
  userFindMany: findMany
};

const Mutation = {
  userTest: (object, { test }) => `User mutation is working: ${test}`,
  userCreate: create
};

export default { Query, Mutation };

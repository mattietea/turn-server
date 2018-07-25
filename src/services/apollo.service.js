import { ApolloServer } from 'apollo-server';
import * as resolvers from '../modules/**/*.*resolvers.js';
import * as typeDefs from '../modules/**/*.*typeDefs.gql';
import { createSchema } from './utility.service.js';

export const apolloInit = () => {
  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers)
  });

  return server.listen();
};

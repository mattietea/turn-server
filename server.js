import { ApolloServer } from 'apollo-server';
import * as resolvers from './src/modules/**/*.*resolvers.js';
import * as typeDefs from './src/modules/**/*.*typeDefs.gql';
import { createSchema } from './src/services/utility.service.js';

export const initServer = () => {
  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers)
  });

  return server.listen();
};

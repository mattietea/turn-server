import { ApolloServer } from 'apollo-server';
import * as resolvers from '../modules/**/*.*resolvers.js';
import * as typeDefs from '../modules/**/*.*types.gql';
import { createSchema } from './utility.service.js';

/**
 * TODO: Fix format error once its fixed on the repository
 * Issue: https://github.com/apollographql/graphql-tools/issues/890
 */
export const apolloInit = () => {
  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers),
    formatError: error => error.originalError.errors
  });

  return server.listen();
};

import { ApolloServer } from 'apollo-server';
import * as resolvers from '../modules/**/*.*resolvers.js';
import * as typeDefs from '../modules/**/*.*typeDefs.gql';
import { createSchema } from './utility.service.js';

/**
 * TODO: Fix format error once its fixed on the Apollo repo
 * Issue: https://github.com/apollographql/graphql-tools/issues/890
 */
export const apolloInit = () => {
  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers),
    formatError: error => {
      console.log(error.originalError.errors);
      return error.originalError.errors;
    }
  });

  return server.listen();
};

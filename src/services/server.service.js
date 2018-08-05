import { ApolloServer } from 'apollo-server';
import * as resolvers from '../**/*.*+(resolvers.js|scalar.js)';
import * as directives from '../**/*.*directive.js';
import * as typeDefs from '../**/*.*types.gql';
import { createSchema } from './utility.service.js';

/**
 * TODO: Fix format error once its fixed on the repository
 * Issue: https://github.com/thebigredgeek/apollo-errors/issues/28
 */
export const serverService = () => {
  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers, directives)
    // formatError: error => {
    //   console.log(error);
    //   return {
    //     message: error.message,
    //     state: error.originalError && error.originalError.state,
    //     locations: error.locations,
    //     path: error.path,
    //     details: error.fields
    //   };
    // }
  });

  return server.listen();
};

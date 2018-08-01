import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as resolvers from '../modules/**/*.*resolvers.js';
import * as typeDefs from '../modules/**/*.*types.gql';
import { createSchema } from './utility.service.js';

/**
 * TODO: Fix format error once its fixed on the repository
 * Issue: https://github.com/thebigredgeek/apollo-errors/issues/28
 */
export const apolloInit = () => {
  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers)
  });

  const app = express();

  server.applyMiddleware({ app });

  return new Promise((resolve, reject) => {
    const listening = app.listen({ port: process.env.PORT }, () => {
      resolve(listening);
    });
  });
};

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as resolvers from '../**/*.*+(resolvers.js|scalar.js)';
import * as directives from '../**/*.*directive.js';
import * as typeDefs from '../**/*.*types.gql';
import { createSchema } from './utility.service.js';

export const serverService = () => {
  const app = express();

  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers, directives)
  });

  server.applyMiddleware({ app });

  return new Promise((resolve, reject) => {
    app.listen({ port: process.env.PORT }, () => {
      resolve(process.env.PORT);
    });
  });
};

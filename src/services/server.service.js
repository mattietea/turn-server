import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import * as resolvers from '../**/*.*+(resolvers.js|scalar.js)';
import * as directives from '../**/*.*directive.js';
import * as typeDefs from '../**/*.*types.gql';
import { createSchema } from '../utility/schema.utility';

export const serverService = () => {
  const app = express();

  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers, directives),
    context: ({ req }) => ({
      token: req.headers['authorization']
    })
  });

  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204
    })
  );

  server.applyMiddleware({ app });

  return new Promise((resolve, reject) => {
    app.listen({ port: process.env.PORT }, () => {
      resolve(process.env.PORT);
    });
  });
};

import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import * as resolvers from '../../modules/**/*.*resolvers.js';
import * as typeDefs from '../../modules/**/*.*types.gql';
import { createSchema } from '../utilities/index.utility.js';

/**
 * TODO: Fix format error once its fixed on the repository
 * Issue: https://github.com/thebigredgeek/apollo-errors/issues/28
 */
export const serverInitialize = () => {
  const server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers)
  });

  return server.listen();
};

export const dbInitialize = () => {
  const db = mongoose.connection;

  db.on('error', error => {
    console.error(`💀 The database failed`, error);
  });

  return mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true }
  );
};

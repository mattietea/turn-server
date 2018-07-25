import { ApolloServer } from 'apollo-server';
import * as resolvers from './src/modules/**/*.*resolvers.js';
import * as typeDefs from './src/modules/**/*.*typeDefs.gql';
import { createSchema, to } from './src/services/utility.service.js';

(async () => {
  let server, error, url;

  server = new ApolloServer({
    schema: createSchema(typeDefs, resolvers)
  });

  [error, { url }] = await to(server.listen());
  if (error) console.error(`💥 The server failed`, error);

  console.log(`🚀 The server started at ${url}`);
})();

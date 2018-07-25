import { ApolloServer } from 'apollo-server';
import * as resolvers from './modules/**/*.*resolvers.js';
import * as typeDefs from './modules/**/*.*typeDefs.gql';
import { createSchema } from './services/utility.service.js';

const server = new ApolloServer({
  schema: createSchema(typeDefs, resolvers)
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.graphql';

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    bye: () => 'dude'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

export default {
  Query: {
    user: () => 'user query'
  },
  Mutation: {
    try: (idk, { name }) => `The name is ${name}`
  }
};

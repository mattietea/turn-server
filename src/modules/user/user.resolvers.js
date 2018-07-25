const Query = {
  userTest: () => 'User query is working'
};

const Mutation = {
  userTest: (root, { test }) => `User mutation is working: ${test}`
};

export default { Query, Mutation };

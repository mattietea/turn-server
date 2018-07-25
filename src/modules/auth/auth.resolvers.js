const Query = {
  authTest: () => 'Auth query is working'
};

const Mutation = {
  authTest: (root, { test }) => `Auth mutation is working: ${test}`
};

export default { Query, Mutation };

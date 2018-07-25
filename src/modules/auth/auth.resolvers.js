const Query = {
  authTest: () => 'Auth query is working'
};

const Mutation = {
  authTest: (object, { test }) => `Auth mutation is working: ${test}`
};

export default { Query, Mutation };

const Query = {
  authTest: () => {
    return 'Auth query is working';
  }
};

const Mutation = {
  authTest: (object, { test }) => {
    return `Auth mutation is working: ${test}`;
  }
};

export default { Query, Mutation };

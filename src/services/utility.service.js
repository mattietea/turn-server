import { makeExecutableSchema, mergeSchemas } from 'apollo-server';

export const createSchema = (allTypeDefs, AllResolvers) => {
  const typeDefsArray = Object.values(allTypeDefs);
  const resolverArray = Object.values(AllResolvers);

  const schemas = typeDefsArray.map((typeDefs, index) =>
    makeExecutableSchema({ typeDefs, resolvers: resolverArray[index] })
  );

  return mergeSchemas({ schemas });
};

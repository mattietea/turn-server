import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { updateObjectKeys } from './misc.utility';

export const createSchema = (allTypeDefs, allResolvers, allDirectives) => {
  const typeDefsArray = Object.values(allTypeDefs);
  const resolverArray = Object.values(allResolvers);

  const typeDefs = mergeTypes(typeDefsArray, { all: true });
  const resolvers = mergeResolvers(resolverArray);
  const schemaDirectives = updateObjectKeys(allDirectives, /.*\$/);

  return makeExecutableSchema({ typeDefs, resolvers, schemaDirectives });
};

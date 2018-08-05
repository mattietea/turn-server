import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

export const createSchema = (allTypeDefs, allResolvers, allDirectives) => {
  const typeDefsArray = Object.values(allTypeDefs);
  const resolverArray = Object.values(allResolvers);

  const typeDefs = mergeTypes(typeDefsArray, { all: true });
  const resolvers = mergeResolvers(resolverArray);
  const schemaDirectives = updateObjectKeys(allDirectives, /.*\$/);

  return makeExecutableSchema({ typeDefs, resolvers, schemaDirectives });
};

export const validate = async (schema, input) => {
  const [errors, valid] = await to(
    schema.validate(input, { abortEarly: false })
  );

  if (!errors) return [null, valid];

  const formattedErrors = errors.inner.map(error => {
    return {
      path: error.path,
      message: error.message
    };
  });

  return [{ fields: formattedErrors }];
};

export const to = promise =>
  promise
    .then(data => {
      return [null, data];
    })
    .catch(error => [error]);

export const updateObjectKeys = (object, replace, replacer = '') =>
  Object.assign(
    {},
    ...Object.keys(object).map(key => ({
      [`${key}`.replace(replace, replacer)]: object[key]
    }))
  );

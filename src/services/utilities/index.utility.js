import { makeExecutableSchema, mergeSchemas } from 'apollo-server';

export const createSchema = (allTypeDefs, AllResolvers) => {
  const typeDefsArray = Object.values(allTypeDefs);
  const resolverArray = Object.values(AllResolvers);

  const schemas = typeDefsArray.map((typeDefs, index) =>
    makeExecutableSchema({ typeDefs, resolvers: resolverArray[index] })
  );

  return mergeSchemas({ schemas });
};

export const to = promise =>
  promise
    .then(data => {
      return [null, data];
    })
    .catch(error => [error]);

export const validate = async (schema, input) => {
  const [errors, valid] = await to(
    schema.validate(input, { abortEarly: false })
  );

  if (errors) {
    const formattedErrors = errors.inner.map(error => {
      return {
        path: error.path,
        message: error.message
      };
    });

    return [{ fields: formattedErrors }];
  }

  return [null, valid];
};

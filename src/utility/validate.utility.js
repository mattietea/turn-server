import { to } from './misc.utility';

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

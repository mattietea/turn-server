import { to } from './misc.utility';

export const validate = async (schema, input) => {
  const [errors, valid] = await to(
    schema.validate(input, { abortEarly: false })
  );

  if (valid) return [null, valid];

  return errors.inner.map(error => {
    return {
      [error.path]: error.message
    };
  });
};

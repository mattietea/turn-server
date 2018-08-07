export const updateObjectKeys = (object, replace, replacer = '') =>
  Object.assign(
    {},
    ...Object.keys(object).map(key => ({
      [`${key}`.replace(replace, replacer)]: object[key]
    }))
  );

export const to = promise =>
  promise
    .then(data => {
      return [null, data];
    })
    .catch(error => [error]);

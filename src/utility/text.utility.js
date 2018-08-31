export const getText = {
  duplicate: (model, field) => `A ${model} with this ${field} already exists!`,
  notFound: (model, field) => `We can't find an ${model} with this ${field}.`,
  required: field => `We need you to give as a valid ${field}.`,
  invalidType: (field, type) => `Make sure ${field} is a valid ${type}.`,
  invalidLength: (field, length) =>
    `Please make sure your ${field} is at least ${length} characters`
};

export const getError = {
  invalidInputs: `Please make sure your inputs are valid`,
  invalidCredentials: `Please make sure your email and password are correct`,
  notAuthed: `Sorry, you're not authorized to do that!`,
  invalidToken: `Oops, please sign in again!`
};

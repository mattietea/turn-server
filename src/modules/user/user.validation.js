import { object, string } from 'yup';

export const userCreateValidator = object().shape({
  firstName: string(`Please make sure your first name is a string.`).required(
    `You're required to provide a first name.`
  ),
  lastName: string(`Please make sure your last name is a string.`).required(
    `You're required to provide a last name.`
  ),
  email: string(`Please make sure your email is a string.`)
    .email(`Please make sure your email is formatted correctly.`)
    .required(`You're required to provide a email.`),
  password: string(`Please make sure your password is a string.`)
    .min(6, `Please make sure your password is more than six characters long.`)
    .required()
});

export const userUpdateValidator = object().shape({
  firstName: string(`Please make sure your first name is a string.`),
  lastName: string(`Please make sure your last name is a string.`),
  email: string(`Please make sure your email is a string.`).email(
    `Please make sure your email is formatted correctly.`
  ),
  password: string(`Please make sure your password is a string.`).min(
    6,
    `Please make sure your password is more than six characters long.`
  )
});

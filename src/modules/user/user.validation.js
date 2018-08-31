import { object, string } from 'yup';
import { getText } from '../../utility/text.utility';

export const userCreateValidator = object().shape({
  firstName: string().required(getText.required('first name')),
  lastName: string().required(getText.required('last name')),
  email: string()
    .email(getText.invalidType('email', 'email address'))
    .required(getText.required('email')),
  password: string()
    .min(6, getText.invalidLength('password', 6))
    .required(getText.required('password'))
});

export const userUpdateValidator = object().shape({
  firstName: string(),
  lastName: string(),
  email: string().email(getText.invalidType('email', 'email address')),
  password: string().min(6, getText.invalidLength('password', 6))
});

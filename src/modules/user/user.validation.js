import { object, string } from 'yup';
import { getText } from '../../services/utility.service';

export const userCreateValidator = object().shape({
  firstName: string(getText.invalidType('first name', 'string'))
    .min(2, getText.invalidLength('first name', 2))
    .required(getText.required('first name')),
  lastName: string(getText.invalidType('last name', 'string'))
    .min(2, getText.invalidLength('last name', 2))
    .required(getText.required('last name')),
  email: string(getText.invalidType('email', 'string'))
    .email(getText.invalidType('email', 'email address'))
    .required(getText.required('email')),
  password: string(getText.invalidType('password', 'string'))
    .min(6, getText.invalidLength('password', 6))
    .required(getText.required('password'))
});

export const userUpdateValidator = object().shape({
  firstName: string(getText.invalidType('first name', 'string')),
  lastName: string(getText.invalidType('last name', 'string')),
  email: string(getText.invalidType('email', 'string')).email(
    getText.invalidType('email', 'email address')
  ),
  password: string(getText.invalidType('password', 'string')).min(
    6,
    getText.invalidLength('password', 6)
  )
});

import { object, string } from 'yup';
import { getText } from '../../utility/text.utility';

export const authSignInValidator = object().shape({
  email: string()
    .email(getText.invalidType('email', 'email address'))
    .required(getText.required('email')),
  password: string()
    .min(6, getText.invalidLength('password', 6))
    .required(getText.required('password'))
});

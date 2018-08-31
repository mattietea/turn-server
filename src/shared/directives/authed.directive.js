import { AuthenticationError } from 'apollo-server-core';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import jwt from 'jsonwebtoken';

export default class AuthedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve } = field;

    field.resolve = async (root, args, context, info) => {
      if (!context.token) throw new AuthenticationError('Not Authed');

      try {
        const { id } = jwt.verify(
          context.token.replace('Bearer ', ''),
          process.env.JWT_SECRET
        );

        return resolve.call(
          this,
          root,
          args,
          { ...context, user: { _id: id } },
          info
        );
      } catch (error) {
        throw new AuthenticationError('Invalid Token');
      }
    };
  }
}

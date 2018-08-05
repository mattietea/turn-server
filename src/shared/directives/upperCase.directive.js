import { SchemaDirectiveVisitor } from 'graphql-tools';

export default class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve } = field;

    field.resolve = async (...args) => {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

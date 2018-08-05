import { SchemaDirectiveVisitor } from 'graphql-tools';

export default class LowerCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve } = field;

    field.resolve = async (...args) => {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toLowerCase();
      }
      return result;
    };
  }
}

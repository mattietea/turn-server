import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

export default {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',

    serialize (value) {
      let v = value;

      if (!(v instanceof Date) && typeof v !== 'string') {
        throw new TypeError(
          `Value is not an instance of Date or Date string: ${v}`
        );
      }

      if (typeof v === 'string') {
        v = new Date();
        v.setTime(Date.parse(value));
      }

      if (Number.isNaN(v.getTime())) {
        throw new TypeError(`Value is not a valid Date: ${v}`);
      }

      return v.toJSON();
    },

    parseValue (value) {
      const date = new Date(value);

      if (Number.isNaN(date.getTime())) {
        throw new TypeError(`Value is not a valid Date: ${value}`);
      }

      return date;
    },

    parseLiteral (ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(
          `Can only parse strings to dates but got a: ${ast.kind}`
        );
      }

      const result = new Date(ast.value);

      if (Number.isNaN(result.getTime())) {
        throw new GraphQLError(`Value is not a valid Date: ${ast.value}`);
      }

      if (ast.value !== result.toJSON()) {
        throw new GraphQLError(
          `Value is not a valid Date format (YYYY-MM-DDTHH:MM:SS.SSSZ): ${
            ast.value
          }`
        );
      }

      return result;
    }
  })
};

## Turn Server

My first formal attempt at a GraphQL server. Plausibly will be used for an application called Turn but I'm not sure...

### Current Todos

#### App

- Authentication
  - [Schema directives](https://blog.apollographql.com/reusable-graphql-schema-directives-131fb3a177d1)
  - Methods
    - Email/password
    - Facebook
    - Twitter
    - Google

#### User

- Input validation

### Upcoming Todos

#### App

- Heroku deployment

#### Keep in Mind

- Babel build, index.js file outside of ./src directory
- GraphQL type interfaces.
  - Should types and interfaces be in a shared folder?
- Common GraphQL scalars.
  - If validation is handled in the resolvers, is this needed?
- Move resolver logic.
  - Should the resolver logic be in a separate file? If so should it be in the models file or in a separate controllers file.

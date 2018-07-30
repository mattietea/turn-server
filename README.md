# Turn Server

My first formal attempt at a GraphQL server. Plausibly will be used for an application called Turn but I'm not sure. Trying to document the issues I face for future reference and for anyone else interested.

<br>

## Current Tasks

### App Related Tasks

- [ ] _July 29 2018_ - Authentication

### User Related Tasks

- [ ] _July 29 2018_ - UserByIds
- [ ] _July 29 2018_ - Input Validation

<br>

## Upcoming Tasks

### App Related Tasks

- [ ] _July 29 2018_ - Heroku deployment

<br>

## Completion Log

### Partial Tasks

- [ ] _July 29 2018_ - 1 Day - [Babel build](#babel-build)

  - Couldn't figure out how to make babel compile the index.js file and the src file. Had to move the index.js file into the src file.

### Completed Tasks

- [x] _July 29 2018_ - 1 Day - Environment file template

<br>

## Keep in Mind

- [ ] _July 29 2018_ - **Unique user email** - Should this be checked using MongoDB and its unique attribute or should I check for uniqueness in the resolver?

- [ ] _July 29 2018_ - <a id="babel-build"></a> **Babel build** - Originally the entry file, index.js, was outside of the src folder. I couldn't figure out how to make babel compile the index.js file and the src folder.

- [ ] _July 29 2018_ - **GraphQL interfaces** - Should I use interfaces? If I do, should all the GraphQL types be stored under one directory?

- [ ] _July 29 2018_ - **Common GraphQL scalars** - Found a library that contains common GraphQL scalars. Does this need to be used if I check input validation separately. If I do use the scalars, how do I return errors that are more user friendly?

- [ ] _July 29 2018_ - **Location of resolver logic** - Should the resolver logic be in a separate file? If so should it be in the models file or in a separate controllers file.

  - _July 29 2018_ - Attaching module specific methods to the model schema might be a bad idea because it would require adding unrelated module methods. A possible option could be defining the schema and model in a shared folder then importing module specific methods into that folder. Another option could be to detach the methods from the schema and have a standalone model file in each module.

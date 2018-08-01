# Turn Server

This is my first formal attempt at a GraphQL server. I'll be doing my best to document the issues I face as I go along for future reference and anyone interested.

<br>

## Current Tasks

### App Related

- [ ] _July 29 2018_ - Authentication

### User Related

<br>

## Upcoming Tasks

### App Related

- [ ] _July 29 2018_ - Heroku deployment

<br>

## Completed Tasks

### Partial

- [ ] _July 29 2018_ - 1 Day - [Babel build](#babel-build)

### Completed

- [x] _July 31 2018_ - 1 Day - [Add Express]()
- [ ] _July 29 2018_ - 2 Day - [User input validation](#input-validation)
- [x] _July 29 2018_ - 1 Day - UserFindManyById
- [x] _July 29 2018_ - 1 Day - Environment file template
- [x] _July 26 2018_ - 1 Day - [Environment file](#environment-file)
- [x] _July 25 2018_ - 1 Day - [GraphQL file extension](#graphql-extension)

<br>

## Keep in Mind

- [ ] _July 29 2018_ - **Unique email index** - Should the user's email index be checked using Mongoose's unique property or inside the userCreate resolver?

- [ ] _July 29 2018_ - **GraphQL interfaces** - I don't feel that defining interfaces are necessary right now due to the size of my code base. I see where they could potentially be useful later but, I will cross that bridge if and when I get there.

- [ ] _July 29 2018_ - **Common GraphQL scalars** - The library [graphql-scalars](4) provides common types on my schemas, including date and email types. An initial concern I have is being able to provide a more user-friendly error. Additionally, I don't know if it's worth it as I'll be using my own input validation.

- [ ] _July 29 2018_ - **Location of resolver logic** - Currently, most of my resolver logic is inside the resolver itself. I'm not sure if this is the best way to do it. Maybe they should be included in the model file or in a separate controller file?

  - _July 29 2018_ - Attaching module specific methods to the model schema might be a bad idea because it would require adding unrelated methods to the module file. A possible option could be defining the schema and model in a shared folder then importing module specific methods into that folder. Another option could be to detach the methods from the schema and having a standalone model file in each module.

## Issues

- [ ] _July 31 2018_ - **Add Express** <a id="add-express"></a> - I want to add OAuth authentication for Facebook. I discovered that OAuth requires a callback URL so I needed to add Express in order to add routes to my server.

- [ ] _July 30 2018_ - **User input validation** <a id="input-validation"></a>

  - I found that Error's aren't being returned in the format I expected. It might be an issue to do with [this](5) or [this](6) or [this](7).

- [ ] _July 29 2018_ - **Babel build** <a id="babel-build"></a> - My original folder structure had my entry in my projects root folder. Unfortunately, Babel's --out-dir flag specifies that I provide it a directory and the --out-file flag requires a given file. Babel's CLI doesn't have an option to do both unless I combine the commands.

  - _July 29 2018_ - I tried combining the commands but ran into another issue, the --out-file needs the file to already exist. Using several scripts and an elaborate combination of mkdirs and touch commands I got it working but decided against it. Instead, I caved in and moved the entry file into the src folder.

- [x] _July 26 2018_ - **Environment file** <a id="environment-file"></a> - I used [babel-plugin-inline-dotenv](3) to import the .env file. I had issues with the environment variables and schema not refreshing because I tried moving `BABEL_DISABLE_CACHE=1` into the .env file. This didn't work because the variable was set after babel transpiled the code. To set the variable before, I needed to add it to the `nodemonConfig` object so the variable was set before babel ran.

- [x] _July 26 2018_ - **GraphQL file extension** <a id="graphql-extension"></a> - I used [babel-plugin-import-graphql](1) to enable `.graphql` and `.gql` file extensions. To avoid individually importing each module's respective resolvers and typeDefs, I also used [babel-plugin-import-glob](2) to batch import them. I then created a [function](./src/services/utility.service.js) to merge the schemas.
  - Files are name with two extension, for example `user.resolvers.js`. I discovered `*.resolvers.js` doesn't work. Instead I needed to use `*.*resolvers.js`.
  - Initially I wasn't disabling babel's cache, this caused the schema not to update. ~~To disable the cache, add `BABEL_DISABLE_CACHE=1` to the beginning of your start script `BABEL_DISABLE_CACHE=1 nodemon --exec babel-node...`.~~ Updated, see [Environment files](#environment-file).

[1]: https://github.com/detrohutt/babel-plugin-import-graphql
[2]: https://github.com/novemberborn/babel-plugin-import-glob
[3]: https://github.com/brysgo/babel-plugin-inline-dotenv
[4]: https://github.com/okgrow/graphql-scalars
[5]: https://github.com/apollographql/graphql-tools/issues/480
[6]: https://github.com/thebigredgeek/apollo-errors/issues/28
[7]: https://github.com/apollographql/graphql-tools/issues/906

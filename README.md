# Turn Server

This is my first formal attempt at a GraphQL server. I'll be doing my best to document the issues I face as I go along for future reference and anyone interested.

<br>

## Tasks Log

### Now Tasks

- [ ] _7/29/18_ - **Authentication**
- [ ] _8/03/18_ - **Change mergeSchema library** - [LI-02](#li-02)

### Later Tasks

- [ ] _7/29/18_ - **Heroku deployment**
- [ ] _7/31/18_ - **Add express** - [KM-05](#km-05)

### Revisit Tasks

- [ ] _7/29/18_ - **Input validation** - [LI-01](#li-01)
- [ ] _7/29/18_ - **Babel build** - [DI-03](#di-03)

### Completed Tasks

- [x] _7/29/18_ - _7/29/18_ - **UserFindManyById**
- [x] _7/29/18_ - _7/29/18_ - **Environment file sample**
- [x] _7/26/18_ - _7/26/18_ - **Environment file** - [DI-02](#di-02)
- [x] _7/25/18_ - _7/25/18_ - **GraphQL file extension** - [DI-01](#di-01)

<br>

## Issues Log

### Library Issues

- [ ] **LI-02** <a id="li-02"></a> - **Change mergeSchema library**

  - _8/03/18_ - I found that Apollo Server's `mergeSchema` function isn't working properly and is currently undergoing a [rewrite](8). I've decided to move to the [merge-graphql-schema](9) library until this is fixed.

- [ ] **LI-01** <a id="li-01"></a> - **Input validation**

  - _7/30/18_ - I found that Error's aren't being returned in the format I expected. It might be an issue to do with [this](5) or [this](6) or [this](7).

### Developer Issues

- [ ] **DI-03** <a id="di-03"></a> - **Babel build**

  - _7/29/18_ - My original folder structure had my entry in my projects root folder. Unfortunately, Babel's `--out-dir` flag specifies that I provide it a directory and the `--out-file` flag requires a given file. Babel's CLI doesn't have an option to do both unless I combine the commands.

  - _7/29/18_ - I tried combining the commands but ran into another issue, the `--out-file` needs the file to already exist. Using several scripts and an elaborate combination of `mkdirs` and `touch` commands I got it working but decided against it. Instead, I caved in and moved the entry file into the src folder.

- [x] **DI-02** <a id="di-02"></a> - **Environment file**

  - _7/26/18_ - I used [babel-plugin-inline-dotenv](3) to import the .env file. I had issues with the environment variables and schema not refreshing because I tried moving `BABEL_DISABLE_CACHE=1` into the .env file. This didn't work because the variable was set after babel transpiled the code. To set the variable before, I needed to add it to the `nodemonConfig` object so the variable was set before babel ran.

- [x] **DI-01** <a id="di-01"></a> - **GraphQL file extension**

  - _7/26/18_ - I used [babel-plugin-import-graphql](1) to enable `.graphql` and `.gql` file extensions. To avoid individually importing each module's respective resolvers and typeDefs, I also used [babel-plugin-import-glob](2) to batch import them. I then created a [function](./src/services/utility.service.js) to merge the schemas.

  - _7/26/18_ - Files are name with two extension, for example `user.resolvers.js`. I discovered `*.resolvers.js` doesn't work. Instead I needed to use `*.*resolvers.js`.

  - _7/26/18_ - Initially I wasn't disabling babel's cache, this caused the schema not to update. ~~To disable the cache, add `BABEL_DISABLE_CACHE=1` to the beginning of your start script `BABEL_DISABLE_CACHE=1 nodemon --exec babel-node...`~~ (Updated [DI-02](#di-02)).

<br>

## Keep in Mind Log

- [ ] **KIM-05** <a id="km-05"></a> - **Add express**

  - _7/31/18_ - I'm considering adding OAuth authentication for Facebook. I discovered that OAuth requires a callback URL so I need to Express in order to provide these routes.

- [ ] **KIM-04** <a id="km-04"></a> - **Unique email index**

  - _7/29/18_ - Should the user's email index be checked using Mongoose's unique property or inside the userCreate resolver?

- [ ] **KIM-03** <a id="km-03"></a> - **GraphQL interfaces**

  - _7/29/18_ - I don't feel that defining interfaces are necessary right now due to the size of my code base. I see where they could potentially be useful later but, I will cross that bridge if and when I get there.

- [ ] **KIM-02** <a id="km-02"></a> - **Common GraphQL scalars**

  - _7/29/18_ - The library [graphql-scalars](4) provides common types on my schemas, including date and email types. An initial concern I have is being able to provide a more user-friendly error. Additionally, I don't know if it's worth it as I'll be using my own input validation.

- [ ] **KIM-02** <a id="km-01"></a> - **Location of resolver logic**

  - _7/29/18_ - Currently, most of my resolver logic is inside the resolver itself. I'm not sure if this is the best way to do it. Maybe they should be included in the model file or in a separate controller file?

  - _7/29/18_ - Attaching module specific methods to the model schema might be a bad idea because it would require adding unrelated methods to the module file. A possible option could be defining the schema and model in a shared folder then importing module specific methods into that folder. Another option could be to detach the methods from the schema and having a standalone model file in each module.

<br>

[1]: https://github.com/detrohutt/babel-plugin-import-graphql
[2]: https://github.com/novemberborn/babel-plugin-import-glob
[3]: https://github.com/brysgo/babel-plugin-inline-dotenv
[4]: https://github.com/okgrow/graphql-scalars
[5]: https://github.com/apollographql/graphql-tools/issues/480
[6]: https://github.com/thebigredgeek/apollo-errors/issues/28
[7]: https://github.com/apollographql/graphql-tools/issues/906
[8]: https://github.com/apollographql/graphql-tools/issues/887
[9]: https://github.com/okgrow/merge-graphql-schemas

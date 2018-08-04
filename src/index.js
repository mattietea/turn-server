import {
  dbInitialize,
  serverInitialize
} from './services/initializers/index.initialize.js';
import { to } from './services/utilities/index.utility.js';

(async () => {
  let error, url;

  // Catch unhandled promises
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
  });

  // Initialize Mongoose
  [error] = await to(dbInitialize());
  if (error) console.error(`💀 The db failed`, error);
  console.log(`🎉 The db connection started`);

  // Initialize Apollo server
  [error, { url }] = await to(serverInitialize());
  if (error) console.error(`💥 The server failed`, error);
  console.log(`🚀 The server started at ${url} `);
})();

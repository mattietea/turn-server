import { apolloInit } from './services/apollo.service.js';
import { dbInit } from './services/db.service.js';
import { to } from './services/utility.service.js';

(async () => {
  let error, url;

  // Catch unhandled promises
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
  });

  // Initialize Mongoose
  [error] = await to(dbInit());
  if (error) console.error(`💀 The db failed`, error);
  console.log(`🎉 The db connection started`);

  // Initialize Apollo server
  [error, { url }] = await to(apolloInit());
  if (error) console.error(`💥 The server failed`, error);
  console.log(`🚀 The server started at ${url} `);
})();

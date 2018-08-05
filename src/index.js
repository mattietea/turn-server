import { databaseService } from './services/database.service.js';
import { serverService } from './services/server.service.js';
import { to } from './services/utility.service.js';

(async () => {
  let error, url;

  // Catch unhandled promises
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
  });

  // Initialize Mongoose
  [error] = await to(databaseService());
  if (error) console.error(`💀 The db failed`, error);
  console.log(`🎉 The db connection started`);

  // Initialize Apollo server
  [error, { url }] = await to(serverService());
  if (error) console.error(`💥 The server failed`, error);
  console.log(`🚀 The server started at ${url} `);
})();

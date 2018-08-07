import { databaseService } from './services/database.service.js';
import { serverService } from './services/server.service.js';
import { to } from './services/utility.service.js';

(async () => {
  let error, port;

  // Catch unhandled promises
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
  });

  // Initialize Mongoose
  [error] = await to(databaseService());
  if (error) console.error(`💀 The db failed`, error);
  console.log(`🎉 The db is connected`);

  // Initialize server
  [error, port] = await to(serverService());
  if (error) console.error(`💀 The server failed`, error);
  console.log(`🎉 The server is listening at port ${port}`);
})();

import { DB_URI } from 'import-dotenv';
import mongoose from 'mongoose';

export const dbInit = () => {
  const db = mongoose.connection;

  db.on('error', error => {
    console.error(`💀 The database failed`, error);
  });

  return mongoose.connect(
    DB_URI,
    { useNewUrlParser: true }
  );
};

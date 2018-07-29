import mongoose from 'mongoose';

export const dbInit = () => {
  const db = mongoose.connection;

  db.on('error', error => {
    console.error(`💀 The database failed`, error);
  });

  console.log('DB URI', process.env.DB_URI);

  return mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true }
  );
};

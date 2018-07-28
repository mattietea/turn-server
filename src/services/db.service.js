import mongoose from 'mongoose';

export const dbInit = () => {
  const db = mongoose.connection;

  db.on('error', error => {
    console.error(`💀 The database failed`, error);
  });

  console.log(process.env.HI);

  return mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true }
  );
};

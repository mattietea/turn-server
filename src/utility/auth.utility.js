import jwt from 'jsonwebtoken';

export const getJwt = id => {
  const payload = { id };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  return `Bearer ${token}`;
};

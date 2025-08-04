import crypto from 'crypto';

export const hashSHA256 = (value) => {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
};

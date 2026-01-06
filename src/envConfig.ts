import dotenv from 'dotenv';
dotenv.config(); // loads .env into process.env

const get = (key: string, fallback?: string) => {
  const val = process.env[key];
  return val === undefined ? fallback : val;
};

export const PORT = Number(get('PORT', '3000'));
export const NODE_ENV = get('NODE_ENV', 'development') as
  | 'development'
  | 'production'
  | 'test';

export default { PORT, NODE_ENV };

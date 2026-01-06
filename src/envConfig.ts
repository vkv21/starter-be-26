import dotenv from 'dotenv';
dotenv.config(); // loads .env into process.env

const get = (key: string, fallback?: string) => {
  const val = process.env[key];
  return val === undefined ? fallback : val;
};

// Check if NODE_ENV is prod or dev to set the frontend url to export
// throw error if url is not provided in env
let frontendurl: string;
if (get('NODE_ENV') === 'production') {
  if (!get('PROD_FRONTEND_URL')) {
    throw new Error(
      'PROD_FRONTEND_URL is not defined in environment variables'
    );
  }
  frontendurl = get('PROD_FRONTEND_URL')!;
} else {
  if (!get('DEV_FRONTEND_URL')) {
    throw new Error('DEV_FRONTEND_URL is not defined in environment variables');
  }
  frontendurl = get('DEV_FRONTEND_URL')!;
}

export const PORT = Number(get('PORT', '3000'));

export const NODE_ENV = get('NODE_ENV', 'development') as
  | 'development'
  | 'production'
  | 'test';

export const FRONTEND_URL = frontendurl;

export default { PORT, NODE_ENV, FRONTEND_URL };

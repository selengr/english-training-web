// routes
import { PATH_DASHBOARD } from './routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API_KEY = process.env.HOST_API_KEY || '';

export const FIREBASE_API = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

export const COGNITO_API = {
  userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.AWS_COGNITO_CLIENT_ID
};

export const AUTH_API = {
  clientId: process.env.AUTH_CLIENT_ID,
  domain: process.env.DOMAIN
};

export const MAP_API = process.env.MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
// export const LOCALHOST = process.env.LOCALHOST! + process.env.LOCALPORT;
export const LOCALHOST = 'http://localhost:3000';

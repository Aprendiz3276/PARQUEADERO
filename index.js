import app from './server.js';

// Handler para Vercel serverless
export default async (req, res) => {
  return app(req, res);
};

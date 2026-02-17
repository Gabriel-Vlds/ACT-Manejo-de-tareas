// Configuracion central del backend: puerto, DB, JWT y CORS.
require('dotenv').config();

const config = {
  port: Number(process.env.PORT || 3000),
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'macarronero'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'dev_secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  },
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:4200'
};

module.exports = { config };

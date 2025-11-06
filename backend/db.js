const { Pool } = require('pg');
require('dotenv').config();

// Smart configuration for the database connection
const isProduction = process.env.NODE_ENV === 'production';

const connectionConfig = {
    connectionString: process.env.DATABASE_URL,
    // Use SSL only when in production (when it's on Render)
    ssl: isProduction ? { rejectUnauthorized: false } : false
};

const pool = new Pool(connectionConfig);

module.exports = {
    query: (text, params) => pool.query(text, params),
    end: () => pool.end()
};
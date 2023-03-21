const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD 
  },

  migrations: {
    tableName: 'knex_migrations'
  }

};
const parse = require('pg-connection-string').parse

module.exports = ({ env }) => {
  //const parsedConnectionString = parse(env('DATABASE_URL'))
  const { host, port, database, user, password } = parse(env('DATABASE_URL'))

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
      debug: false,
    },
  }
}

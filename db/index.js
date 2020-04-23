const pgp = require('pg-promise')()

const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'valence_db',
	user: 'postgres',
	password: 'alpine'
};

var db = pgp(dbConfig);

module.exports = db;
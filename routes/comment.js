const express = require('express')
let router = express.Router()

var pgp = require('pg-promise')();

const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'valence_db',
	user: 'postgres',
	password: 'pwd'
};

var db = pgp(dbConfig);


router.use(function(req, res, next) {
	console.log(req.url, "@", Date.now());
	next();
});

router
.route("/public")
.get((req,res) => {
	var query = 'SELECT comment_id, message FROM comment;';
	db.any(query)
	.then(function (data) => {
			res.render('public/home', {
				commenter: data[0]
				message: data[1]
			})
		// res.send(data)
		// render the comments
	})
	.catch(error => {
		req.flash('error', err);
		console.log(error)
	})
})
.post((req, res) => {
    res.send("hi post /public/home");
    // send to db
});

module.exports = router;
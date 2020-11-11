const express = require('express');
var session = require('express-session');
const app = express();

// Session and DB setup
app.use(session({
	key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
		expires: 600000000
    }
}));

// Pug
app.set('view engine', 'pug');
app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));

app.get("/", (req, res) => {
    res.render('index', {
        title:'Home',
        user: (req.session.user === undefined ? "Username" : req.session.user),
        userLogged: (req.session.user === undefined ? false : true)
    });
});

app.get('*', function(req, res) {
	res.render('error', {
		title:'Error',
		user: (req.session.user === undefined ? "Username" : req.session.user)
	});
});

module.exports = app;
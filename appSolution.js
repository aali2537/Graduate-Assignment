var express = require('express');
var app = express();

app.use(express.urlencoded({extended: false}));
app.set('views', './views');
app.set('view engine', 'pug');  

// List of username and passwords as key value pairs to keep authentication simple
if (!app.locals.userList) {
    app.locals.userList = {
        'bob': 'bobpass',
        'dave': 'davepass',
        'joe': 'joepass'
    };

    //Initialize current user logged on to none
    app.locals.currentUser = 'None';
}

/*Create middleware that
1. Redirects page request to /login page if there is no currentUser signed in
2. Authenticates users to login using the data from the post form on /login
3. Logs out currently signed in user when using the logout link which get requests /logout
*/

//1. Redirect page requests to /login if user is not authenticated/logged in
const authenticated = function (req, res, next) {
    if (app.locals.currentUser == 'None') {
        res.redirect('/login')
    }
    next();
}

//2. Authenticates users with the post data from /login
app.post('/login', (req, res, next) => {
    if (app.locals.userList[req.body.formUser] == req.body.formPassword && app.locals.userList[req.body.formUser] !== undefined) {
        app.locals.currentUser = req.body.formUser;
        res.redirect('/')
    } else {
        res.redirect('/login');
    }

})

//3. Logs out current user when visiting /logout hyperlink
app.get('/logout', (req, res, next) => {
    app.locals.currentUser = 'None';
    res.redirect('/login');
})

app.get('/login', (req, res, next) => {
    res.render('login');
});

app.get('/', authenticated, (req, res, next) => {
    res.render('home');
})

module.exports = app;
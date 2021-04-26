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
1. Redirects all page requests to /login page if there is no currentUser signed in
2. Authenticates users to login using the data from the post form on /login
3. Logs out currently signed in user when using the logout link which get requests /logout
*/

app.get('/login', (req, res, next) => {
    res.render('login');
});

app.get('/', (req, res, next) => {
    res.render('home');
})

module.exports = app;
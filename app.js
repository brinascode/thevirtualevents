var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var eventsApiRouter = require('./routes/eventsApiRouter');
var usersRouter = require('./routes/users');



var app = express();

//Db setup
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/thevirtualevents",{
  useNewUrlParser: true,
  useFindAndModify: false
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));


//Passport
var passport = require("passport")
var flash = require("connect-flash")
var session = require("express-session")
require("./authen/passport.js")(passport)
// Passport stuff 2
app.use(session({
    secret: 'sabrinayes',
    resave: true,
    saveUninitialized: true,
    //cookie: { httpOnly: true, domain:"localhost" } //bring back to true ,you cant set cookies for another domain
})); // session secret
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


app.use('/api/events', eventsApiRouter);
app.use('/api/users', usersRouter(app,passport));



app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,"client/index.html"))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

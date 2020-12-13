var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adsRouter = require('./routes/ads');

//auth essentials
const passport = require('passport')
const session = require('express-session')

var app = express();

//coonection to mongoDB
const mongoose = require('mongoose');
const globals = require('./config/globals')
mongoose.connect(globals.db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(
    (res) => {
      console.log('Connected to MongoDB')
    }
).catch(() => {
  console.log('No Connection to MongoDB')
})

//manage session
app.use(session({
    secret: 'AdWebsiteSecret',
    resave: true,
    saveUninitialized:false
}))


app.use(passport.initialize())
app.use(passport.session())

const user = require('./models/user')
passport.use(user.createStrategy())

passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routing urls
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ads', adsRouter);


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

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyparser = require("body-parser");
const helmet = require("helmet");
const logger = require('morgan');
const app = express();
const indexRouter = require('./routes/index');
const sendMail = require("./routes/sendMail");
const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGOADMINPW}@cluster0.lvzue.mongodb.net/birth?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
     console.log('Connected to database');
   })
   .catch((err) => {
     console.log('Error connecting to DB', err.message);
   });

module.exports = function application(
  ENV,
  actions = { updateComments: () => {}, deleteComments: () => {} }
) {

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
 });


 app.use(helmet());
 app.use(bodyparser.json());

 // parse requests of content-type - application/x-www-form-urlencoded
 app.use(bodyparser.urlencoded({ extended: true }));


  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/uploads', express.static('uploads'))
  app.use('/', indexRouter);
  app.use("/api", sendMail);
  
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
}


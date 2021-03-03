const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyparser = require("body-parser");
const helmet = require("helmet");
const logger = require('morgan');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sendMail = require("./routes/sendMail");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const  nodeoutlook = require('nodejs-nodemailer-outlook')
const { checkJwt } = require('./utils/auth');
const { request } = require('express');

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

  app.use('/', indexRouter);
  app.use("/api", sendMail);
  app.use('/users', usersRouter);

  app.get('/users', checkJwt, async (req, res) => {
    res.send('this is a test.')
  })

  app.get('/test-auth', checkJwt, async (req, res) => {
    res.send('this is a test.')
  })
  
  app.get('/get-token', (req, res) => {
    request({
      method: "POST",
      url: 'https://dev-signup.eu.auth0.com/oauth/token',
      headers: {"content-type": 'application/x-www-form-urlencoded'},
      form: {
        grant_type: 'client_credentials',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env. AUTH0_CLIENT_SECRET,
        audience: 'sovereignbirth.ca'
      }
    }, function(error, response, body) {
      if (error) {
        res.status(400)
        res.send(error)
      }
      res.send(body)
    })
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


  const db = require("./models");
  const Role = db.role;

  db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
  
    Role.create({
      id: 2,
      name: "moderator"
    });
  
    Role.create({
      id: 3,
      name: "admin"
    });
  }

  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground" // Redirect URL
  );
  
  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
  });

  // const accessToken = oauth2Client.getAccessToken()

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",  
    port: 587,
    secureConnection: false, // TLS requires secureConnection to be false      
    tls: {
      ciphers:'SSLv3'
    },
    auth: {
      type: "OAUTH2",
      user: process.env.GMAIL_USERNAME,
      pass: process.env.PASSWORD,
      // expires: 3599
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: false,
      minVersion:'TLSv1.2'
    }
  });
  
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
}


const express = require("express");
var router = express.Router();

module.exports = () => {
  router.post('/send', (req, res, next) => {
    var name = req.body.firstName + " " + req.body.lastName
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
  
    var mail = {
      from: email,
      to: process.env.GMAIL_USERNAME,
      name: name,
      subject: subject,
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })
}
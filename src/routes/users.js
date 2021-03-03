var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
	
router.post('/login', (req, res) => {
  const password = req.body.password;
  const user = checkForUserByEmail(req.body.email, users);
  if (!user) {
    return res.status(401).send('No user with that email found');
  }
  bcrypt
    .compare(password, user.password)
    .then((result) => {
      if (result) {
        req.session.user_id = user.id;
        req.session.user = user.email;
        res.redirect('/urls');
      } else {
        res.status(401).send('<h1> Error 401. Forbidden. Invalid Credentials.');
      }
    });
});

module.exports = router;

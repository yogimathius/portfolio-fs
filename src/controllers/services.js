const servicesRouter = require('express').Router();

servicesRouter.get('/', (req, res) => {
  return res.send('Hi, from within the services router GET'); 
});

servicesRouter.post('/', (req, res) => {
  return res.send('Hi, from within the services router POST');
});

module.exports = servicesRouter;
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa')

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-ujyqkc4s.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'sovereignbirth.ca',
  issuer: 'https://dev-ujyqkc4s.us.auth0.com/',
  algorithms: ['RS256']
})
function auth (req, res, next) {
  // x-api-key
  // if not x-api-key header
  // if not right key
  if(!req.header("x-api-key") || req.header("x-api-key") !== "test-api-key") {
    res.status(401)
    return res.jason({message: "Invalid API key"})
  }
  next()
}

module.exports = { auth, checkJwt }
/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");
//const Users = require("../users/users-model.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // token bad
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        // token good
        req.user = { username: decodedToken.username };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
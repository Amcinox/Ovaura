const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  try {
    req.headers.apikey ===  process.env.API_KEY ? next() : (res.send("invalid key") && res.status(403))
  } catch {
    res.status(401);
    res.send("Invalid request!");
  }
};

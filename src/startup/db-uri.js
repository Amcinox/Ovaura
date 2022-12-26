const dotenv = require("dotenv");
dotenv.config();
const dbUri = getDbUri();
function getDbUri() {
  const dbName = process.env.dbName;
  const dbUsername = process.env.dbUsername;
  const dbPassword = process.env.dbPassword;
  return `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.3i6nl.mongodb.net/${dbName}`;
}

module.exports.dbUri = dbUri;

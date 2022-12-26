const openai = require("../../models/openai");
const fetchTimeout = require("../../controllers/hmida");
const fs = require("fs");

module.exports = async (req, res) => {
  const files = fs.readdirSync("./src/assets/audio");
  console.log(files);
  res.send(files);
};

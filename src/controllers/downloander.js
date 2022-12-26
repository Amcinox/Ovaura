const fs = require("fs"),
  request = require("request");

const download = async function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri)
      .pipe(fs.createWriteStream(`./src/assets/images/${filename}`))
      .on("close", callback);
  });
};

module.exports = download;

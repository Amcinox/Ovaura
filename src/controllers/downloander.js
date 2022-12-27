const fs = require("fs");
const Axios = require("axios");
request = require("request");

// downloand video from url
async function download({ url, filepath }) {
  const response = await Axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filepath))
      .on("error", reject)
      .once("close", () => resolve(filepath));
  });
}

module.exports = download;

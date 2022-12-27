const youtube = require("../../models/google");
const fs = require("fs");

async function uploadVideo({ filePath, title, description }) {
  const fileSize = fs.statSync(filePath).size;
  const res = youtube.videos.insert(
    {
      part: "id,snippet,status",
      notifySubscribers: false,
      requestBody: {
        snippet: {
          title,
          description,
        },
        status: {
          privacyStatus: "private",
        },
      },
      media: {
        body: fs.createReadStream(filePath),
      },
    },
    {
      // Use the `onUploadProgress` event from the `Response` object to track the
      // number of bytes uploaded to this point.
      onUploadProgress: (evt) => {
        const progress = (evt.bytesRead / fileSize) * 100;
        console.log(`${parseInt(progress)}% complete`);
      },
    }
  );

  return {
    fileData: {
      filePath,
      fileSize,
    },
  };
}

module.exports = uploadVideo;

const youtube = require("../../models/google");
const fs = require("fs");

async function uploadVideo(filePath, fileName) {
  const fileSize = fs.statSync(filePath).size;
  const res = youtube.videos.insert(
    {
      part: "id,snippet,status",
      notifySubscribers: false,
      requestBody: {
        snippet: {
          title: fileName,
          description: "This is a test video uploaded via the YouTube API",
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
    youtubeData: res.data.snippet,
    fileData: {
      filePath,
      fileSize,
      fileName,
    },
  };
}

module.exports = uploadVideo;

const fs = require("fs");
const downloander = require("../../controllers/downloander");
const createVideo = require("../../controllers/generator/video");
const createImage = require("../../controllers/generator/image");
const uploadVideo = require("../../controllers/upload/youtubeUpload");

// Generate Name for the file
const generateName = require("../../utils/generate");
const paths = require("../../utils/pathConfig");

module.exports = async (req, res) => {
  const { prompt } = req.body;
  const imageName = generateName("image");
  const videoName = generateName("video");
  try {
    const image = await createImage({
      prompt,
    });
    await downloander({
      url: image[0].url,
      filepath: paths.imagePath(imageName),
    });
    const video = await createVideo({
      videoPath: paths.videoPath(videoName),
      imagePath: paths.imagePath(imageName),
      audioPath: paths.audioPath("1.mp3"),
    });
    // verify if video is created and upload it
    let intervalId = setInterval(async () => {
      const stats = fs.statSync(paths.videoPath(videoName));
      const fileSizeInBytes = stats.size;
      if (fileSizeInBytes > 0) {
        console.log("file is created");
        const videoData = await uploadVideo(
          paths.videoPath(videoName),
          videoName
        );
        res.send(videoData);
        clearInterval(intervalId);
      }
    }, 1000);
  } catch (error) {
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

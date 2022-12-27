const fs = require("fs");
const downloander = require("../../controllers/downloander");
const createVideo = require("../../controllers/generator/video");
const createImage = require("../../controllers/generator/image");
const createTitle = require("../../controllers/generator/title");
const createDescription = require("../../controllers/generator/description");
const uploadVideo = require("../../controllers/upload/youtubeUpload");

// Generate Name for the file
const generateName = require("../../utils/generate");
const paths = require("../../utils/pathConfig");

module.exports = async (req, res) => {
  const { prompt } = req.body;
  const imageName = generateName("image");
  const videoName = generateName("video");
  try {
    // Generate Image
    const image = await createImage({
      prompt,
    });

    // Generate Title
    const title = await createTitle({
      prompt,
    });

    // Generate Description
    const description = await createDescription({
      prompt,
    });

    // Download Image after it is generated
    await downloander({
      url: image[0].url,
      filepath: paths.imagePath(imageName),
    });

    // Generate Video using Image and Audio
    const video = await createVideo({
      videoPath: paths.videoPath(videoName),
      imagePath: paths.imagePath(imageName),
      audioPath: paths.audioPath("1.mp3"),
    });

    // verify if video is created and upload it
    let intervalId = setInterval(() => {
      const stats = fs.statSync(paths.videoPath(videoName));
      const fileSizeInBytes = stats.size;
      if (fileSizeInBytes > 0) {
        console.log("file is created");
        const videoData = uploadVideo({
          filePath: paths.videoPath(videoName),
          title,
          description,
        });
        res.send(videoData);
        clearInterval(intervalId);
      }
    }, 1000);
  } catch (error) {
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

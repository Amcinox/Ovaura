const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

async function createVideo({
  videoPath,
  imagePath,
  audioPath,
  size = "1280x720",
}) {
  try {
    const video = ffmpeg()
      .input(imagePath)
      .input(audioPath)
      .format("mp4")
      .videoCodec("libx264")
      .audioCodec("aac")
      .size("1280x720")
      .fps(30)
      .outputOptions("-movflags faststart")
      .videoBitrate("1000k")
      .audioBitrate("128k")
      .aspect("16:9")
      .audioChannels(2)
      .audioFrequency(44100)
      .on("end", () => {
        console.log("Video generated successfully");
      })
      .on("error", (error) => {
        console.error(error);
        throw new Error(error);
      });

    // const outputPath = `./src/output/${videoName}.mp4`;
    video.save(videoPath);
  } catch (error) {
    console.log(error);
  }

  return videoPath;
}

module.exports = createVideo;

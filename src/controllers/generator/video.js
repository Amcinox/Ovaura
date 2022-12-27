const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

async function createVideo({
  videoPath,
  imagePath,
  audioPath,
  size = "1280x720",
}) {
  const video = ffmpeg()
    .input(imagePath)
    .input(audioPath)
    .inputOptions(["-r 1"])
    .videoCodec("libx264")
    .videoBitrate("1000k")
    .fps(30)
    .audioBitrate("128k")
    .aspect("16:9")
    .audioChannels(2)
    .audioFrequency(44100)
    .size(size)
    .audioCodec("aac")
    .outputOptions(["-pix_fmt yuv420p"])

    .on("end", () => {
      console.log("Video generated successfully");
    })
    .on("error", (error) => {
      console.error(error);
      throw new Error(error);
    });

  // const outputPath = `./src/output/${videoName}.mp4`;
  video.save(videoPath);
  return videoPath;
}

module.exports = createVideo;

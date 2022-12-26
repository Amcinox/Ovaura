const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

async function createVideo({ videoName, imageName, audioName }) {
  const video = ffmpeg()
    .input(`./src/assets/images/${imageName}`)
    .input(`./src/assets/audio/${audioName}`)
    .videoCodec("libx264")
    .videoBitrate("1000k")
    .fps(30)
    .videoFilters("scale=320:200")
    .audioBitrate("128k")
    .audioChannels(2)
    .audioFrequency(44100)
    .size("320x200")
    .audioCodec("aac")
    .outputOptions(["-pix_fmt yuv420p"])

    .on("end", () => {
      console.log("Video generated successfully");
    })
    .on("error", (error) => {
      console.error(error);
    });

  const outputPath = `${videoName}.mp4`;
  video.save(outputPath);
  return outputPath;
}

module.exports = createVideo;

const downloander = require("../../controllers/downloander");
const createVideo = require("../../controllers/generator/video");
const createImage = require("../../controllers/generator/image");

module.exports = async (req, res) => {
  const { prompt } = req.body;
  const imageName = Math.random().toString(36).substring(2, 15) + ".jpg";
  const videoName = Math.random().toString(36).substring(2, 15);
  const image = await createImage({
    prompt,
  });
  const imageURL = image[0].url;
  downloander(imageURL, imageName, () =>
    createVideo({
      videoName,
      imageName,
      audioName: "1.mp3",
    })
  );

  res.send("create video");
};

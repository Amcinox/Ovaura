const createImage = require("../../controllers/generator/image");
const downloander = require("../../controllers/downloander");

const generateName = require("../../utils/generate");
const paths = require("../../utils/pathConfig");

module.exports = async (req, res) => {
  const { prompt } = req.body;
  try {
    const imageName = generateName("image");

    const completion = await createImage({
      prompt,
    });

    await downloander({
      url: completion[0].url,
      filepath: paths.imagePath(imageName),
    });

    res.send(completion);
  } catch (error) {
    console.log({ error });
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

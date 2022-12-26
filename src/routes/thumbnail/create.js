const createImage = require("../../controllers/generator/image");

module.exports = async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await createImage({
      prompt,
    });
    res.send(completion);
  } catch (error) {
    console.log({ error });
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

const createDescription = require("../../../controllers/generator/description");
module.exports = async (req, res) => {
  const { prompt } = req.body;
  try {
    const description = await createDescription({
      prompt,
    });
    res.send(description);
  } catch (error) {
    console.log({ error });
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

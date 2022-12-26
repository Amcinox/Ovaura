const createTitle = require("../../../controllers/generator/title");
module.exports = async (req, res) => {
  const { prompt } = req.body;
  try {
    const title = await createTitle({ prompt });
    res.send(title);
  } catch (error) {
    console.log({ error });
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

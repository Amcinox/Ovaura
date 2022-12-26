const { callPostApi } = require("../../startup/axios");
const path = require("../../utils/paths");

module.exports = async (req, res) => {
  const { keywords } = req.body;
  const data = {
    prompt: `a youtube video thumbnail of a ${keywords.join(", ")}"`,
    n: 2,
    size: "512x512",
  };
  try {
    const response = await callPostApi({ url: path.generateImage(), data });
    const imageUrl = response.data[0].url;
    res.send({ imageUrl });
  } catch (error) {
    console.log({ error });
    res.statusCode = 400;
    res.send({ message: "error" });
  }

  //   // demo
  //   res.send({
  //     imageUrl: "https://i.ytimg.com/vi/_wlEo2Opaw0/maxresdefault.jpg",
  //   });
};

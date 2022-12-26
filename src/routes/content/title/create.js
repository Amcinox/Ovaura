const { callPostApi } = require("../../../startup/axios");
const path = require("../../../utils/paths");

module.exports = async (req, res) => {
  const { keywords } = req.body;
  const data = {
    prompt: `Generate a youtube video title based on the following keywords: ${keywords.join(
      ", "
    )}`,
    model: "text-davinci-002", // Use the DaVinci model
    temperature: 0.5,
    max_tokens: 32,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
  try {
    // send token with this reques
    const response = await callPostApi({
      url: path.generateText(),
      data,
    });
    console.log(response);
    // Extract the generated title from the response
    const title = response.choices[0].text;

    res.send(title);
  } catch (error) {
    console.log({ error });
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

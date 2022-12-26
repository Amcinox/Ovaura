const { callPostApi } = require("../../../startup/axios");
const path = require("../../../utils/paths");
module.exports = async (req, res) => {
  const { keywords } = req.body;
  const data = {
    prompt: `Generate a youtube video description  based on the following keywords: ${keywords.join(
      ", "
    )}`,
    model: "text-davinci-002",
    temperature: 0.5,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  try {
    const response = callPostApi({ url: path.generateText(), data });

    // Extract the generated title from the response
    const description = response.choices[0].text;

    res.send(description);
  } catch (error) {
    console.log({ error });
    res.statusCode = 400;
    res.send({ message: "error" });
  }
};

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.DELLE_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = openai;

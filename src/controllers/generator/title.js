const openai = require("../../models/openai");
async function createTitle({ prompt, model = "text-davinci-002" }) {
  const data = {
    prompt,
    model,
    temperature: 0.5,
    max_tokens: 32,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
  try {
    const completion = await openai.createCompletion(data);
    return completion.data.choices[0].text;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createTitle;

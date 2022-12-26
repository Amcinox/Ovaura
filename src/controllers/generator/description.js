const openai = require("../../models/openai");

async function createDescription({
  prompt,
  model = "text-davinci-002",
  max_tokens = 500,
}) {
  const data = {
    prompt,
    model,
    temperature: 0.5,
    max_tokens,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  try {
    const completion = await openai.createCompletion(data);
    const description = completion.data.choices[0].text;
    return description;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createDescription;

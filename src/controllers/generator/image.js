const openai = require("../../models/openai");

async function createImage({ prompt, n = 2, size = "512x512" }) {
  const data = {
    prompt,
    n,
    size,
  };
  try {
    const completion = await openai.createImage(data);
    return completion.data.data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createImage;

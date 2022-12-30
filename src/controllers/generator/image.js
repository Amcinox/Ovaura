const openai = require("../../models/openai");

async function createImage({ prompt, n = 1, size = "1024x1024" }) {
  const data = {
    prompt,
    n,
    size,
  };
  try {
    // return [
    //   {
    //     url: "https://images.indianexpress.com/2021/06/YouTube-logo.jpg",
    //   },
    // ];

    const image = await openai.createImage(data);
    return image.data.data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = createImage;

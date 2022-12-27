function generateName(type) {
  let name = "";
  if (type === "image") {
    name = Math.random().toString(36).substring(2, 15) + ".jpg";
  }
  if (type === "video") {
    name = Math.random().toString(36).substring(2, 15) + ".mp4";
  }
  if (type === "audio") {
    name = Math.random().toString(36).substring(2, 15) + ".mp3";
  }

  return name;
}

module.exports = generateName;

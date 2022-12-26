module.exports = async (req, res) => {
  const setting = await getOne(Setting);
  if (!setting) {
    res.statusCode = 400;
    res.send({ message: "doesn't exist" });
  }
  res.send(setting);
};

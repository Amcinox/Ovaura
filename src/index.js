const { app } = require("./app");
const { dbConnect } = require("./startup/db");
const dotenv = require("dotenv");

dotenv.config();

const start = async () => {
  try {
    dbConnect();
  } catch (err) {
    console.error(err);
  }

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

start();

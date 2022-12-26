const express = require("express");
const app = express();
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

app.use(helmet());
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));

require("./startup/routes")(app);

app.all("*", async (req, res) => {
  console.log(req.protocol + "://" + req.get("host") + req.originalUrl);
  res.send("Error ");
  // throw new NotFoundError();
});

module.exports.app = app;

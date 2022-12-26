const mongoose = require("mongoose");
const { dbUri } = require("./db-uri");

const dbConnect = function () {
  mongoose.set("strictQuery", false);
  !dbUri && console.log("DataBase ERROR: Undefined db uri! ");
  dbUri &&
    mongoose
      .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Connected to Mongodb ...`))
      .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
      });
};

module.exports.dbConnect = dbConnect;

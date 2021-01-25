require('dotenv').config()
const express = require("express");
const app = express();
const db = require("./Util/db");
const urlRouter = require("./Routes/homeRouter");

async function initialize() {
  app.use(express.json());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use("/", urlRouter);

  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}!!!`);
  });
}

initialize();
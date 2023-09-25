/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const cors = require("cors");
const marketController = require("./controller/marketController");

const app = express();

//Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//serving static files
app.use(express.static(`${__dirname}/src/pages`));

app.use(cors());
app.options("*", cors());
//test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.use("/market", marketController.getAllMarket);

app.use("/", async (req, res) => {
  let quality = 0;
  console.log("line 29 app.js", req.query.data);
  my_dict = req.query.data;
  console.log("line 31 app.js", my_dict);

  await axios
    .get(
      `https://python-public-api-production.up.railway.app/?my_dict=${my_dict}`
    )
    .then((ans) => {
      quality = ans.data;
    })
    .catch((err) => {
      console.error(err);
      quality = 0;
    });
  res.status(200).json({
    quality,
  });
});

module.exports = app;

/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const cors = require("cors");

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

app.use("/", async (req, res) => {
  let quality = 0;
  my_dict = req.query.data;

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

/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const cors = require("cors");
// import fetch from "node-fetch";

const Router = require("./router.js");

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

app.use("/x", async (req, res) => {
  let quality = 0;
  await axios
    .get(
      "https://python-public-api-production.up.railway.app/?my_dict={%22aroma%22:8.67,%22Flavor%22:8.83,%22Aftertaste%22:8.6,%22Acidity%22:8.75,%22Body%22:8.5,%22Balance%22:8.42,%22Uniformity%22:10.0,%22Clean.Cup%22:10.0,%22Sweetness%22:10.0,%22Cupper.Points%22:8.75,%22Moisture%22:0.12,%22Quakers%22:0.0,%22Category.One.Defects%22:0.0,%22Category.Two.Defects%22:0,%22altitude_mean_meters%22:2075.0}"
    )
    .then((ans) => {
      quality = ans.data;
      // console.log(ans.data);
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

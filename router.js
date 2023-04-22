const express = require("express");
const router = express.Router();
// import fetch from 'node-fetch';

router.get("/x", (req, res, next) => {
  const mlurl = `https://python-public-api-production.up.railway.app/?my_dict={%22aroma%22:8.67,%22Flavor%22:8.83,%22Aftertaste%22:8.6,%22Acidity%22:8.75,%22Body%22:8.5,%22Balance%22:8.42,%22Uniformity%22:10.0,%22Clean.Cup%22:10.0,%22Sweetness%22:10.0,%22Cupper.Points%22:8.75,%22Moisture%22:0.12,%22Quakers%22:0.0,%22Category.One.Defects%22:0.0,%22Category.Two.Defects%22:0,%22altitude_mean_meters%22:2075.0}`;

  // let out = 0;
  fetch(mlurl, { mode: "no-cors" })
    .then((response) => response.json())
    .then((data) => {
      console.log("---------------");
      const val = JSON.parse(data.quality);
      console.log(`this ${val} and ${typeof val}`);
      res.status(200).json({
        val,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  res.status(200).json({
    status: "Success",
  });
});

module.exports = router;

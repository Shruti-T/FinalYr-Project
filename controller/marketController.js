const Market = require("./../model/market");

exports.getAllMarket = async (req, res, next) => {
  const features = await Market.find();
  console.log(features);

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
  });
};

/* eslint-disable no-console */
const mongoose = require("mongoose");

const marketSchema = new mongoose.Schema({
  name: String,
});

const Market = mongoose.model("Market", marketSchema);

module.exports = Market;

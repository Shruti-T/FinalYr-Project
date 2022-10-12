const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    console.log("hereee");
    res.render("login", {
      title: "LOGIN",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Fail",
      message: "Server Error!",
    });
  }
});

module.exports = router;

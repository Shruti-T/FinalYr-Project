const express = require("express");
const authController = require("./../controller/authController");

const router = express.Router();

router.get("/login", (req, res, next) => {
  try {
    res.render("farmer");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Fail",
      message: "Server Error!",
    });
  }
});

router.get("/signUp", (req, res, next) => {
  try {
    res.render("signUp", {
      title: "SIGNUP",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Fail",
      message: "Server Error!",
    });
  }
});

router.post("/signUp", authController.signUp);
router.post("/login", authController.login);

module.exports = router;

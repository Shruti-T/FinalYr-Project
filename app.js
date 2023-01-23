/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./Router/userRoute");
const path = require("path");

const app = express();

//Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//serving static files
app.use(express.static(`${__dirname}/public`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

//test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRouter);
// app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  console.log("route not defined yet!", res.url);
  // next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;

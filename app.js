/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./Router/userRoute");
// const rateLimit = require("express-rate-limit");
// const mongoSanitize = require("express-mongo-sanitize");

const app = express();

// 1) GLOBAL MIDDLEWARES

//Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Body parser,reading data from the body into req.body [the '10kb' is 10 kiloByte, basically limiting the amount of body data so if user adds anything forcefully to body it is not accepted]
// app.use(express.json({ limit: "10kb" }));

//Data sanitization against NoSQL query injection---> try postman login but in place of email put-> {"gt":""}
//this will filter out all of the $,. symbols
// app.use(mongoSanitize());

//serving static files
app.use(express.static(`${__dirname}/public`));

//test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;

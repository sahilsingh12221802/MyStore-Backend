const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const router = require("./routes/qart/index");
const passport = require("passport");
const { jwtStrategy } = require("./config/passport");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "https://my-store-frontend-tau.vercel.app/",
  credentials: true,
}));

mongoose.connect(config.mongoose.url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);
app.use("/verse", router);

app.get("/", (req, res) => {
  res.send("Hello, welcome to Cart Project");
});

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
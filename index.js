const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const router = require("./routes/qart/index");
const passport = require("passport");
const { jwtStrategy } = require("./config/passport");
const cors = require("cors"); // Import the cors package

const app = express();

// Enable CORS
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from your frontend
  credentials: true, // Allow cookies and credentials
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
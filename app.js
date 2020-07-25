const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();

app.get("/users", (req, res) => {
  res.status(200).json({
    message: "App deployed on heroku",
  });
});

app.listen(process.env.PORT, () => {
  console.log("App running on port ", process.env.PORT);
});

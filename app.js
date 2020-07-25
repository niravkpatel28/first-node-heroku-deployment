const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "path", "index.html"));
});

app.get("/users", (req, res) => {
  res.status(200).json({
    message: "App deployed on heroku",
  });
});

app.listen(process.env.PORT, () => {
  console.log("App running on port ", process.env.PORT);
});

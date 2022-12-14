const express = require("express");
const app = express();
require("dotenv").config();

const postsController = require("./controllers/posts");
const usersController = require("./controllers/users");
const gptController = require("./controllers/gpt");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use("/", express.static("./client/dist"));

app.use(express.json());

app
  .get("/", (req, res) => {
    res.status(200).send("Hello World!");
  })
  .get("/error", (req, res) => {
    sss.PORT();
  })
  .use("/api/v1/posts", postsController)
  .use("/api/v1/users", usersController)
  .use("/api/v1/gpt", gptController);

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "./client/dist" });
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

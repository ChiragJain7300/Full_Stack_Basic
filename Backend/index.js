import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5000;
import { jokes } from "./jokes.js";

app.get("/", (req, res) => {
  res.send("Base Reply");
});
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`The server is running at ${port}`);
});

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://bertoni:bertoni@cluster0.5750s.mongodb.net/bertoni?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3333);

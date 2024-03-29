const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/dev");
const FakeDb = require("./fake-db");
const productRoutes = require("./routes/products");

mongoose.connect(config.DB_URI).then(() => {
  console.log("DB Connected!");
  const fakeDb = new FakeDb();
  fakeDb.initDb();
});

const app = express();
app.use(bodyParser.json({ type: "application/*+json" }));

app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || "3001";

app.listen(PORT, function () {
  console.log("I am running");
});

const express = require("express");
const mongoose = require("mongoose");
const UserReg=require("./Router/router");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Helloworld!!!!!");
});
app.use("/v0/api",UserReg)
const URI = "mongodb+srv://admin:admin@cluster0.qhibquw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
  .connect(URI)
  .then(console.log("Mongodb Connected Successfully....."))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server Run on 5000");
});
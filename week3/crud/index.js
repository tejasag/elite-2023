const express = require("express");
const mongoose = require("mongoose");
const { Article } = require("./models/Article");
require("dotenv").config();

const app = express();
app.use(express.json());
const port = 3000;

const {
  Types: { ObjectId },
} = mongoose;
const isValidObjectId = (id) =>
  ObjectId.isValid(id) && new ObjectId(id).toString() === id; //true or false

app.get("/article", async (req, res) => {
  let articles = await Article.find();
  res.send(articles);
});

app.get("/article/:id", async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(401).json({
      message: "Invalid object id",
      success: false,
    });
  }
  let articles = await Article.findOne({
    _id: req.params.id,
  })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(404).send("Not found");
    });
});

app.post("/article/create", async (req, res) => {
  let article = await Article.create({
    article: req.body.article,
    posted_by: req.body.posted_by,
    posted_at: Date.now(),
    last_updated_at: Date.now(),
  })
    .then(() => res.status(200).send("Successful"))
    .catch((err) => console.error(err));
});

app.put("/article/:id/update", async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(401).json({
      message: "Invalid object id",
      success: false,
    });
  }

  let article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((doc) => res.send("Successfully updated"))
    .catch((err) => console.error(err));
});

app.delete("/article/:id/delete", async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(401).json({
      message: "Invalid object id",
      success: false,
    });
  }

  let article = await Article.findOneAndDelete({
    _id: req.params.id,
  })
    .then((doc) => res.send("Successfully deleted"))
    .catch((err) => console.error(err));
});

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() => {
      console.log("connected to mongoose");
    })
    .catch((err) => {
      console.log("Error in the Connection", err);
    });

  console.log(`Listening on port ${port}`);
});

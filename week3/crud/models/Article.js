const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  article: String,
  posted_by: String,
  posted_at: Number,
  last_updated_at: Number,
});
const Article = mongoose.model("Article", schema);

module.exports = { Article };

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  summary: {
    type: String
  },
  pubdate: {
    type: Date
  },
  link: {
    type: String
  },
  saved: {
    type: Boolean,
    default: true
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
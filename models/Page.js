const mongoose = require("mongoose");
const { Schema } = mongoose;

const pageSchema = new Schema({
  title: String,
  icon: String,
  color: String,
  form: String,
  link: String,
});

module.exports = Page = mongoose.model("page", pageSchema);

const mongoose = require("mongoose");

const FeedSchema = mongoose.Schema({
  feed: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("feed", FeedSchema);
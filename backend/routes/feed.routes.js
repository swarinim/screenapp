const route = require("express").Router();

const Feed = require("../models/feed.models");

route.get("/",async (req, res) => {
  try {
    const foundFeed = await Feed.find();
    res.json(foundFeed);
  } catch (err) {
    console.log(err)
  }

});



route.post("/", async (req, res) => {
  const feed = req.body.feed;
  const feedItem = new Feed({
    feed: feed
  })
  try {
    const savedFeed = await feedItem.save();
    res.json(savedFeed);
  } catch (err) {
    console.log(err);
  }

});


module.exports = route;
const express = require('express');
const axois = require('axios');
const router = express.Router();

let posts;

const getPosts = async (req, res, next) => {
  try {
    posts = await axois.get("https://www.reddit.com/r/" + req.params.subreddit + "/top/.json?limit=200").then((response) => response.data.data.children)
    sanitizeData()
  } catch(e) {
    posts = {'error': 'get request could not be fifilled'}
  }
  res.json(posts)
};

router
  .route('/api/v1/posts/:subreddit')
  .get(getPosts);
  
function sanitizeData() {
  var allData = []
  for(var i = 0; i < posts.length; i++) {
    var toAppend = {
    }
    toAppend["title"] = posts[i].data.title
    toAppend["author"] = posts[i].data.author
    toAppend["permalink"] = posts[i].data.permalink
    toAppend["url"] = posts[i].data.url
    allData.push(toAppend)
  }
  var toReturn = '';
  for (var i = 0; i < toReturn.length; i++) {
    toReturn = toReturn + allData[i]
    if (i < toReturn - 1) {
      toReturn = toReturn + ',\n'
    }
  }
  posts = allData;
}

module.exports = router;
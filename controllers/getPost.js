const Post = require("../database/models/Post")
const path = require("path");

module.exports = async (req, res) => {

  const post = await Post.findById(req.params.id).populate('author');
  res.render("post", {
    post
  });

}

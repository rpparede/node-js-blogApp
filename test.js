const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog', { useNewUrlParser: true })

// Post.find({}, (error,posts) => {
//   console.log(error, posts)
// })

// Post.findById("5cdce33441ccc5008ced233d", (error,post) => {
//   console.log(error,post)
// })


// Post.create({
//
//   title: 'My second Blog Post',
//   description: 'Second Blog post description',
//   content: 'Second Lorem ipsum'
// }, (error, post) => {
//   console.log(error,post)
// })
mongoose.set('useFindAndModify', false);

Post.findByIdAndUpdate("5cdce33441ccc5008ced233d", {

  title: 'My first edit on mongodbbb'
}, (error, post) => {
  console.log(error, post)
})

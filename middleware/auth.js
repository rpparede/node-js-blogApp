const User = require('../database/models/User')

module.exports = (req, res, next) => {
  //fetch user from data base
  User.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      console.log("**USER ID NOT FOUND")
      return res.redirect('/')
    }
    next()
  })
  //verify user


  //if user valid permit request

  //else redirect
}

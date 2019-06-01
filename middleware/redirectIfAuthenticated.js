const User = require('../database/models/User')

module.exports = (req,res,next) => {
  //fetch user from data base
if(req.session.userId)
{
  return res.redirect('/')
}
next()

}

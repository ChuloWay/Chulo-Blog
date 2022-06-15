const User = require('../public/assets/models/User')
const path = require('path')

module.exports = async (req, res) => {
  const {username, password} = req.body;
  const user = new User({ username, password });
    await user.save();
    req.session.userId = user._id
    if (!user) {
      const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
      req.flash('validationErrors', validationErrors)
      req.flash('data', req.body)
      return res.redirect('/auth/register')
    }
    res.redirect('/')
  
}
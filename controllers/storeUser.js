const User = require('../public/assets/models/User')
const path = require('path')
// const { Console } = require('console')

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.session.validationErrors = validationErrors
            console.log(validationErrors)
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}
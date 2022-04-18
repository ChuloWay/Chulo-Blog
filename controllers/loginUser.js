const bcrypt = require('bcrypt')
const User = require('../public/assets/models/User')

module.exports = (req,res) =>{
    const { username,password } = req.body
    
    
    User.findOne({username: username},function(error,user){        
        if(user){
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same){
                    req.session.userId = user._id
                    res.redirect('/')
                }
                else{
                    res.redirect('/auth/login')
                }

            })

        }
        else{
            errors: req.flash('validationErrors')
            console.log("/auth/login:", user)
            res.redirect('/auth/login'),
            {
                //errors: req.session.validationErrors
                errors: req.flash('validationErrors'),
                username: username,
                password: password
            }
        }
    })
}


    
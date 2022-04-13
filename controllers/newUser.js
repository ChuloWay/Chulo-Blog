const User = require('../public/assets/models/User')

module.exports = (req,res)=>{
   
    res.render('register',{
         
        errors:req.session.validationErrors
        
    })//render register.ejs and show error if any 
    
}

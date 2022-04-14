const BlogPost = require('../public/assets/models/BlogPost')

module.exports = async (req,res) =>{
    const blogposts = await BlogPost.find({}).populate('userid')    
    console.log(req.session)
    res.render('index',{
        blogposts
    })
}
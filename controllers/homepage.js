const BlogPost = require('../public/assets/models/BlogPost')

module.exports = async(req,res)=>{
    const blogposts = await BlogPost.find({})
    console.log(req.session);
    res.render('index', {blogposts})
}
const BlogPost = require('../public/assets/models/BlogPost')

module.exports = async (req,res) =>{
    const blogpost =  await BlogPost.findById(req.params.id).populate('userid');
    console.log(blogpost)
    res.render('post',{
        blogpost
    })
}
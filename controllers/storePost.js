const BlogPost = require('../public/assets/models/BlogPost')
const path = require('path')

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'..', 'public/assets/img/', image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image: '/assets/img/' + image.name
        })
        res.redirect('/')
    })
    console.log(req.body);

}
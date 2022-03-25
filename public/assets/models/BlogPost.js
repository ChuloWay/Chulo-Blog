const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BlogPostSchema= new schema({
    title:String,
    body:String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BlogPostSchema = new schema({
    title: String,
    body: String,
    username: String,
    datePosted: {/*can declare*/
        type: Date,
        default: new Date(),
        
    },
    image:String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
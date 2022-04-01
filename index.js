const express = require('express');
//const res = require('express/lib/response');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
const BlogPost = require('./public/assets/models/BlogPost')

app.set('view engine', 'ejs');


app.use(express.static('public'))

app.listen(4000, () => {
    console.log('App Listening On Port 4000!!');
})

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index', {
        blogposts
    })
    // console.log(blogposts);
})
app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})
app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)

    res.render('post', {
        blogpost
    })
})

app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')

})
app.get('/posts/new', (req, res) => {
    res.render('create')

})

const fileUpload = require('express-fileupload');
const { error } = require('console');
app.use(fileUpload())


app.post('/posts/store', (req, res) => {
    //new post to be stored in database with user input(browser data)
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/assets/img', image.name), async (error) => {
        await BlogPost.create(req.body, (error, blogpost) => {
            console.log(req.body);
            res.redirect('/')
        })

    })

})

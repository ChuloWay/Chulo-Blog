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


app.set('view engine', 'ejs');


app.use(express.static('public'))

app.listen(4000, () => {
    console.log('App Listening On Port 4000!!');
})


const newIndexController = require('./controllers/newIndex')
app.get('/', newIndexController)

const newAboutController = require('./controllers/newAbout')

app.get('/about', newAboutController)

const getPostController = require('./controllers/getPost')
app.get('/post/:id',getPostController )



const newContactController = require('./controllers/newcontacts')

app.get('/contact', newContactController)


const newPostController = require('./controllers/newPost')

app.get('/posts/new', newPostController)


const fileUpload = require('express-fileupload');
// const { error } = require('console');
app.use(fileUpload())




// Middleware created for user form validation in blogpost.create
    const validateMiddleWare = (req,res,next)=>{
        if(req.files == null || req.body == null || req.title == null){
            return res.redirect('/posts/new')
        }
        next()
    }

    app.use('/posts/store/',validateMiddleWare)


    const storePostController = require('./controllers/storePost')
    app.post('/posts/store', s) 
        //new post to be stored in database with user input(browser data)
   


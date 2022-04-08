
const express = require('express');
//const res = require('express/lib/response');
const app = express();
// const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
// const BlogPost = require('./public/assets/models/BlogPost')
const fileUpload = require('express-fileupload');
app.set('view engine', 'ejs');
const validateMiddleWare = require('./middleware/validationMiddleware')






app.use(express.static('public'))
app.use(fileUpload())
app.use('/posts/store/', validateMiddleWare)

app.listen(4000, () => {
    console.log('App Listening On Port 4000!!');
})
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/homepage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
// const storeUserController = require('./controllers/')
const userAbout = require('./controllers/newAbout')
const getContact = require('./controllers/newcontacts')
app.get('/', homeController)

app.get('/about', userAbout)
app.get('/posts/new', newPostController)

app.get('/post/:id', getPostController)

app.get('/contact', getContact)
app.post('/posts/store', storePostController)
app.get('/auth/register', newUserController)







// const { error } = require('console');




// Middleware created for user form validation in blogpost.create







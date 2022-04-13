
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
const expressSession = require('express-session')


global.loggedIn = null;




app.use(express.static('public'))
app.use(fileUpload())
app.use('/posts/store/', validateMiddleWare)
app.use(expressSession({
    secret:'God Is Great'
}))

app.use("*", (req,res,next)=>{
    loggedIn = req.session.userId;

    next()
})

app.listen(4000, () => {
    console.table({
        Port:'App Listening On Port 4000!',
        Database: 'Connected To MongoDB'
    });
})
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/homepage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const userAbout = require('./controllers/newAbout')
const getContact = require('./controllers/newcontacts')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const authMiddleware = require('./middleware/authMidlleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticated')
const logoutController = require('./controllers/logout')
const notFoundController = require('./controllers/notfound')
app.get('/', homeController)

app.get('/about', userAbout)
app.get('/posts/new',authMiddleware, newPostController)

app.get('/post/:id', getPostController)

app.get('/contact', getContact)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.get('/auth/login',  redirectIfAuthenticatedMiddleware, loginController)
app.get('/auth/logout', logoutController)



app.post('/user/register',redirectIfAuthenticatedMiddleware, storeUserController)
app.post('/posts/store',authMiddleware, storePostController)
app.post('/user/login',redirectIfAuthenticatedMiddleware, loginUserController)

app.get('*',notFoundController );











// const { error } = require('console');




// Middleware created for user form validation in blogpost.create







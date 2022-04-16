const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('', { useNewUrlParser: true });

const app = express()
const ejs = require('ejs')

const fileUpload = require('express-fileupload')
const validateMiddleWare = require('./middleware/validationMiddleware')
const expressSession = require('express-session')
const authMiddleware = require('./middleware/authMidlleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticated')
const flash = require('connect-flash')
const bodyParser = require('body-parser')

//const res = require('express/lib/response');

// const path = require('path');
app.set('view engine', 'ejs');

global.loggedIn = null;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/posts/store/', validateMiddleWare)
app.use(expressSession({
    secret:'God Is Great'
}))
app.use(flash())
app.use("*", (req,res,next)=>{
    loggedIn = req.session.userId;
    next()
})
let port = process.env.PORT;
if(port == null || port == ""){
    port = 4000;
}

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
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')
const userAbout = require('./controllers/newAbout')
const getContact = require('./controllers/newcontacts')
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







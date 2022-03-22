const express = require('express');
//const res = require('express/lib/response');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

app.set('view engine','ejs');


app.use(express.static('public'))

app.listen(4000, () => {
    console.log('App Listening On Port 4000!!');
})

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
})
app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})
app.get('/post', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})
app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')

})
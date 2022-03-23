const mongoose = require('mongoose');
const BlogPost = require('./assets/models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

BlogPost.create({
    title: 'This is a test for Blog On MongoDb',
    body: 'Hello this is ebuka okoye victor, i am a final year student of geology in nnamdi azikiwe university'
},(error, blogpost) => {
    console.log(error,blogpost);
}
)
BlogPost.create({
    title: 'This Is a second post for my MongoDB',
    body: 'Hello this is ebuka okoye victor, i am a Software Engineer'
},(error, blogpost) => {
    console.log(error,blogpost);
}
)

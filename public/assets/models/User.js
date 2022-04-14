const mongoose = require('mongoose');

const schema = mongoose.Schema;

const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator');



const UserSchema = new schema({
    username: {
    type: String,
    required: [true, 'Please Provide Username'],
    unique:true
    },
    password: {
        type: String,
        required: [true, 'Please Provide Password']
    }
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10,(error, hash)=>{
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
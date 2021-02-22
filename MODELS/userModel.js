


const mongoose= require('mongoose');

const userModel = mongoose.Schema(
    {
        userId: String,
        firstname: String,
        lastname: String,
        password: String,
        email: String,
        dateOfBirth: String,
        phone: Number,
        address:Object,
        agree: Boolean,
        position: String
    }
)

module.exports=mongoose.model('users', userModel);
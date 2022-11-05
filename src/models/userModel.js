const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    "isDeleted": {
        type: String,
        default:false
    },
    age: Number,
    //post:{type:String,
    //     default:[]}
    
}, { timestamps: true });

//==========================================================================================================================

module.exports = mongoose.model('NewUser2', userSchema)

const mongoose = require('mongoose');

//Schema
const userSchema = new mongoose.Schema(
    {
        fullname:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        mobile:{
            type: Number,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
    },{
        timestamps: true,
        toJSON: {virtuals: true}
    }
);

//compile the schema to form a model
const User = mongoose.model('User', userSchema);

module.exports = User;
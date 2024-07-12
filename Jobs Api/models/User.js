const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Must!!! "],
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "Email is Must!!! "],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please Provide Valid Email'],
        unique: [true, 'Email is already Used Try logging in'],
        minLength: 3,
        maxLength: 50
    },
    password: {
        type: String,
        required: [true, "Password is Must!!! "],
        minLength: 6,
    }
});

userSchema.pre('save', async function () {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.getName = function () {
    return this.name;
};

userSchema.methods.getToken = function () {
    const payload = {
        name: this.name,
        userId: this._id
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
};

userSchema.methods.comparePassword=async function(candiadatePassword){
    const isMatch=await bcryptjs.compare(candiadatePassword,this.password);
    return isMatch;
}

module.exports = mongoose.model('User', userSchema);

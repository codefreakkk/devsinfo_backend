const mongoose = require("mongoose");

const user = mongoose.Schema({
    u_name : {
        type: String, 
        default: "Enter your name"
    }, 
    u_email: {
        type: String,
        required: [true, 'Please add your email'],
        unique: [true, 'User already exists'],
        // ref: "userDetails"
    },
    u_password: {
        type: String,
        required: [true, 'Please add your password']
    },
    u_image: {
        type: String,
        default: "NOFILE"
    },
    u_contact: {
        type: String, 
        maxLength: [15, 'Contact number cannot be larger than 15 digits'],
        default: "",
    },
    u_state: {
        type: String,
        default: "",
    },
    u_description: {
        type: String,
        maxLength: [50, 'Only 20 Characters are allowed'],
        default: "Please edit your description"
    },
    skill1: {
        type: String,
        default: "Enter your skills",
    },
    skill2: {
        type: String,
        default: "",
    },
    skill3: {
        type: String,
        default: "",
    },
    skill4: {
        type: String,
        default: "",
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("user", user);
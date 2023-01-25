const mongoose = require("mongoose");

const userDetails = new mongoose.Schema({
    u_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    u_email: {
        type: String,
        default: "",
    },
    resume: {
        type: String,
        default: "",
    },
    linked_in: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: "",
    },
    leetcode: {
        type: String,
        default: "",
    },
    gfg: {
        type: String,
        default: "",
    },
    codeforces: {
        type: String,
        default: "",
    },
    codechef: {
        type: String, 
        default: ""
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("userDetails", userDetails);
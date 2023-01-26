const mongoose = require("mongoose");

const linksModel = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
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

module.exports = mongoose.model("linksModel", linksModel);
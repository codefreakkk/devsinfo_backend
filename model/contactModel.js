const mongoose = require("mongoose");

const contactMode = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user",
    },
    u_name: {
        type: String,
    },
    u_email: {
        type: String,
    },
    u_desc: {
        type: String,
    }
})

module.exports = new mongoose.model("contactModel", contactMode);
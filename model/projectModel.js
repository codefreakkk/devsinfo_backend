const mongoose = require("mongoose");

const projectModel = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user",
    },
    project_name: {
        type: String,
        default: "",
    },
    project_link: {
        type: String, 
        default: "",
    },
    project_description: {
        type: String, 
        default: "",
    }
});

module.exports = new mongoose.model("projectModel", projectModel);
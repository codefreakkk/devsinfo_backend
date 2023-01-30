const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const contactController = require("../controller/contactController");

router.post("/setcontact", auth, contactController.setContact);

module.exports = router;
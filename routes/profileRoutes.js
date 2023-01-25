const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const profileController = require("../controller/profileController");

router.get("/userdetails", auth, profileController.getUserDetails);
router.post("/setprofile", auth, profileController.setProfile);

module.exports = router;

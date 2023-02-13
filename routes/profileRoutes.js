const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const profileController = require("../controller/profileController");

router.get("/userdetails", auth, profileController.getUserDetails);
router.get("/codinglinksdetails", auth, profileController.getCodingLinks);
router.get("/getprojects", auth, profileController.getProjects);
router.post("/setprofile", auth, profileController.setProfile);
router.post("/codinglinks", auth, profileController.setCodingLinks);
router.post("/addprojects", auth, profileController.setProject);

module.exports = router;

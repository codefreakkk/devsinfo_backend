const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { u_email, u_password } = req.body;
    const user = await userModel.findOne({ u_email, u_password });
    if (user) {
      const uid = user._id.toString();
      const token = jwt.sign({ uid }, "devsinfo", { expiresIn: "1d" });
      return res.status(200).json({ success: true, token: `Bearer ${token}`, u_email });
    } else
      return res
        .status(200)
        .json({
          success: false,
          message: `Please check your username or password`,
        });
  } catch (e) {
    return res.status(400).json({ err: e.message });
  }
};

exports.signup = async (req, res) => {
  try {
    const { u_email, u_password } = req.body;
    const user = await userModel.findOne({ u_email });

    if (user) {
      return res.status(200).json({
        success: false,
        message: `User with this email already exists`,
      });
    }

    const data = await userModel.create({
      u_name: "",
      u_email: u_email,
      u_password: u_password,
      u_image: "",
      u_city: "",
      u_contact: "",
    });

    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "Signup successfull" });
    }
    return res
      .status(400)
      .json({ success: false, message: "Some error occured" });
  } catch (e) {
    console.log("some error occured");
    return res.status(400).json({ err: e.message });
  }
};

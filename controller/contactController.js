const contactModel = require("../model/contactModel");

exports.setContact = async (req, res) => {
  try {
    const { name, email, desc } = req.body;
    const uid = req.user._id.toString();

    const contact = await contactModel.create({
      uid: uid,
      u_name: name,
      u_email: email,
      u_desc: desc,
    });

    if (contact) {
      res
        .status(200)
        .json({ success: true, message: "Data saved successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Data not saved some error occured" });
    }
  } catch (e) {
    res.status(500).json({ message: "Some error occured" });
  }
};

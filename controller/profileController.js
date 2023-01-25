const userModel = require("../model/userModel");

exports.getUserDetails = async (req, res) => {
  try {
    const uid = req.user._id.toString();
    const user = await userModel.findOne({ uid });

    if (user) {
      return res.status(200).json({ status: true, data: user });
    } else return res.status(200).json({ status: false, data: {} });
  } catch (e) {
    console.log(e.message);
  }
};

exports.setProfile = async (req, res) => {
  try {
    const {
      u_name,
      u_contact,
      u_state,
      skill1,
      skill2,
      skill3,
      skill4,
      u_description,
    } = req.body;
    const uid = req.user._id.toString();

    const user = await userModel.findOneAndUpdate(
      { _id: uid },
      {
        $set: {
          u_name,
          u_contact,
          u_state,
          skill1,
          skill2,
          skill3,
          skill4,
          u_description,
        },
      }
    );

    if (user) {
      return res
        .status(200)
        .json({ status: true, message: "Data updated successfully" });
    } else {
      return res
        .status(200)
        .json({
          status: false,
          message: "Data not updated some error occureds",
        });
    }
  } catch (e) {
    console.log(e.message);
  }
};

const userModel = require("../model/userModel");
const linksModel = require("../model/linksModel");

exports.getUserDetails = async (req, res) => {
  try {
    const uid = req.user._id.toString();
    const user = await userModel.findOne({ uid });

    if (user) {
      return res.status(200).json({ status: true, data: user });
    } else return res.status(200).json({ status: false, data: {} });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
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
      return res.status(400).json({
        status: false,
        message: "Data not updated some error occureds",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.setCodingLinks = async (req, res) => {
  try {
    const { linked_in, github, leetcode, gfg, codeforces, codechef } = req.body;
    const uid = req.user._id.toString();

    // if links are not saved yet in db
    const links = await linksModel.findOne({ uid });
    if (links === null) {
      const linksQuery = await linksModel.create({
        uid,
        linked_in,
        github,
        leetcode,
        gfg,
        codeforces,
        codechef,
      });

      if (linksQuery) {
        return res
          .status(200)
          .json({ success: true, message: "Data saved successfully" });
      } else {
        return res.status(400).json({
          success: false,
          message: "Data not saved some error occured",
        });
      }
    } else {
      // if links are already saved in db then only update it
      const updatedLinks = await linksModel.findOneAndUpdate({ uid });
      // **** need to work on this part not completed
      // if (updatedLinks) {
      //   return res
      //     .status(200)
      //     .json({ success: true, message: "Data saved successfully" });
      // } else {
      //   return res
      //     .status(400)
      //     .json({ success: false, message: "Data not updated" });
      // }
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

exports.getCodingLinks = async (req, res) => {
  try {
    const uid = req.user._id.toString();
    const links = await linksModel.findOne({ uid });
    if (links) {
      return res.status(200).json({ success: true, data: links });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Some error occured" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Some error occured" });
  }
};

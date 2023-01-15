const Page = require("../models/Page");

// ADD A NEW POST
module.exports.add = async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}`;
  const { file } = req;
  try {
    if (file == null) {
      return res.status(400).send({ msg: "You can't add a page without icon" });
    }
    const newPage = new Page({ ...req.body });
    newPage.icon = `${url}/${file.path}`;
    await newPage.save();
    res.status(200).send({ msg: "Page added" });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL POSTS
module.exports.getAll = async (req, res) => {
  try {
    const allPages = await Page.find();
    res.send({ allPages });
  } catch (error) {
    console.log(error);
  }
};

// GET ONE PAGE FROM ID
module.exports.getPage = async (req, res) => {
  try {
    const onePage = await Page.findOne({ _id: req.params.id });
    res.status(200).send(onePage);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

// UPDATE A POST
module.exports.update = async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}`;
  const { file } = req;
  try {
    const updatedPage = await Page.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body, icon: `${url}/${file.path}` } }
    );
    if (!updatedPage.modifiedCount) {
      return res.status(500).send({ msg: "No infos to update" });
    }
    res.status(200).send({ msg: "Page updated successfully" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

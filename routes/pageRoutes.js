const express = require("express");
const {
  getAll,
  add,
  update,
  getPage,
} = require("../controllers/pageControllers");
const Page = require("../models/Page");
const upload = require("../utils/multer");

const router = express.Router();

// REQUEST FOR TESTING
router.get("/", (req, res) => {
  res.send({ msg: "test Page" });
});

// GET ALL PAGE
router.get("/all", getAll); //TESTED IN BACKEND

// GET A PAGE FROM ID
router.get("/:id", getPage); //TESTED IN BACKEND

// ADD NEW PAGE
router.post("/add", upload("pages").single("file"), add); //TESTED IN BACKEND

// UPDATE A PAGE
router.put("/:id", upload("pages").single("file"), update); //TESTED IN BACKEND

module.exports = router;

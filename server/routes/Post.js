const express = require("express");
const mongoose = require("mongoose");
const { Post } = require("../model/Post");
const router = express.Router();
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid file name");
    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

let uploadOptions = multer({ storage: storage });

//Get Post
router.get("/", async (req, res) => {
  const post = await Post.find({});
  if (!post) {
    return res
      .status(500)
      .json({ message: "No Post in system", success: false });
  }
  res.json(post);
});
//Get Post by Id
router.get("/:id", async (req, res) => {
  const Posts = await Post.findById(req.params.id);
  if (!Posts) {
    return res
      .status(500)
      .json({ message: "No Posts founded", success: false });
  }
  res.status(200).json(Posts);
});

//Add Post
router.post("/", uploadOptions.single("image"), async (req, res) => {
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

  let post;

  const file = req.file;
  if (!file) {
    post = new Post({
      title: req.body.title,
    });
  } else {
    const fileName = req.file.filename;
    post = new Post({
      title: req.body.title,
      image: `${basePath}${fileName}`,
    });
  }

  await post.save((err, result) => {
    if (err) {
      return res.status(400).json({ message: err, success: false });
    }
    return res.status(200).json(result);
  });
});

//Delete Posts
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Post.findByIdAndRemove(id)
    .then((Post) => {
      if (Post) {
        return res
          .status(200)
          .json({ success: true, message: "the Post deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "the Post not found" });
      }
    })
    .catch((err) => {
      return res.json(400).json({ success: false, error: err });
    });
});
module.exports = router;

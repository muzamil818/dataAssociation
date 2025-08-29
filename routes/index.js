var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser", async function (req, res) {

  const createdUser = await userModel.create({
    fullname: "muzamil ali",
    username: "muzamil",
    email: "muzamilali@gmail.com",
    password: "muzamilali",
  });

  res.send(createdUser);
});

router.get("/createpost", async function (req, res) {

  const createdPost = await postModel.create({

    title: "This is my first post",
    users: "68b203250b7fb850cb8402cb",

  });

  const user = await userModel.findOne({ _id: "68b203250b7fb850cb8402cb" });
  user.posts.push(createdPost._id);

  await user.save();
  res.send("done");
});

module.exports = router;

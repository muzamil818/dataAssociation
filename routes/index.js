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

router.get("/finduserpost", async function(req, res){
  const userpost = await userModel.findOne({_id: "68b30cf9fd435f074ffe6429" }).populate("posts")

  res.send(userpost)
})

router.get("/createpost", async function (req, res) {
  const createdPost = await postModel.create({
    title: "that is my third post ",
    users: "68b30cf9fd435f074ffe6429",
  });

  const user = await userModel.findOne({ _id: "68b30cf9fd435f074ffe6429" });
  user.posts.push(createdPost._id);

  await user.save();
  res.send("done");
});

module.exports = router;

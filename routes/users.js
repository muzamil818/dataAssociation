const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dataAssociation");
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }],
    dp: {
      type: String, // URL or file path for display picture
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);


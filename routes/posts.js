const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
          type: Date,
          default: Date.now,
        },
    likes: [
      {
        type: Array,
        default: [], // users who liked the post
      },
    ],

  },

);

module.exports = mongoose.model("Post", postSchema);

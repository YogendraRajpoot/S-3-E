const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    profileimage: { type: URL, required: true },
    id: { type: String, required: true },
    idbook: [{ type: mongoose.Types.ObjectId, ref: "books" }],
    idcomments: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

module.exports = mongoose.model("user", user);

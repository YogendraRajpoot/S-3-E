const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    likes: { type: Boolean,default:false },
    coverImage: { type: String ,required:true},
    content: { type: String, required: true },
    idpublications: [{ type: mongoose.Types.ObjectId, ref: "publication" }],
    idcomment: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
  },
  {
    timestamps: { createdAt: true, upDatedAt: true },
  }
);

module.exports = mongoose.model("user", user);

import mongoose from "mongoose";

const postModel = mongoose.Schema({
  user: String,
  imgname: String,
  text: String,
  avatar: String,
  timestamp: String,
});

export default mongoose.model("posts", postModel);

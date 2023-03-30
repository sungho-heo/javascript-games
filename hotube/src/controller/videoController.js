import Video from "../models/Video";
import User from "../models/User";

// callback 방식을 사용하려는데 최신버전은 callback문법을 사용할수없어서 promise로 구현함.
export const homeVideo = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos: videos });
};

export const watch = async(req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id).populate("owner");
  if (video === null) {
    return res.status(404).render("404", { pageTitle: "Video not found" });
  }
  return res.render("watch", { pageTitle: video.title, video: video });
};

export const getEdit = async(req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if (video === null) {
    return res.render("404", { pageTitle: "Video not found" })  
  }
  return res.render("videos/edit", { pageTitle: `Editing:${video.title}`,video:video});
};

export const postEdit = async(req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  const hashtags = req.body.hashtags;
  const video = await Video.exists({ _id: id });
  if (video === null) {
    return res.status(404).render("404", { pageTitle: "Video not found" })  
  }
  await Video.findByIdAndUpdate(id, {
    title: title,
    description: description,
    hashtags: Video.formatHashtags(hashtags),
  })
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("videos/upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const owner = req.session.user._id;
  const fileUrl = req.file;
  const title = req.body.title;
  const description = req.body.description;
  const hashtags = req.body.hashtags;
  try {
    await Video.create({
      title: title,
      owner: owner,
      fileUrl: fileUrl.path,
      description: description,
      hashtags: Video.formatHashtags(hashtags),
    });
  } catch (error) {
    return res.status(400).render("videos/upload", { pageTitle: "Upload Video", errorMessage: error._message });
  }
  return res.redirect("/");
};

export const deleteVideo = async (req, res) => {
  const id = req.params.id;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async(req, res) => {
  let video = [];
  const keyword = req.query.keyword;
  if (keyword) {
    video = await Video.find({
      title: {
        $regex: new RegExp(`^${keyword}`,"i")
      }
    });
  }
  return res.render("search", { pageTitle: "Search", videos:video });
};
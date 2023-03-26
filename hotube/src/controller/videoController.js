import Video from "../models/Video";

// callback 방식을 사용하려는데 최신버전은 callback문법을 사용할수없어서 promise로 구현함.
export const homeVideo = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos: videos });
};

export const seeVideo = async(req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if (video === null) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("watch", { pageTitle: video.title, video: video});
};

export const getEdit = async(req, res) => {
  const id = req.params.id;
  const video = await Video.findById(id);
  if (video === null) {
    return res.render("404", { pageTitle: "Video not found" })  
  }
  return res.render("edit", { pageTitle: `Editing:`,video:video});
};

export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async(req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const createdBy = req.body.createdBy;
  const hashtags = req.body.hashtags;
  try {
    await Video.create({
      title: title,
      description: description,
      createdBy: createdBy,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    })
  } catch (error) {
    return res.render("upload", { pageTitle: "Upload Video", errorMessage: error._message });
  }
  return res.redirect("/");
};
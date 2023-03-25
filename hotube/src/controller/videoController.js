import Video from "../models/Video";

export const homeVideo = async (req, res) => {
  const video = await Video.find({});
  console.log(video.error);
    return res.render("home", { pageTitle: "Home" });
};

export const seeVideo = (req, res) => {
    const id = req.params.id;
    return res.render("watch", { pageTitle: `Watching:`});
};

export const getEdit = (req, res) => {
    const id = req.params.id;
    return res.render("edit", { pageTitle: `Editing:`});
};

export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const title = req.body.title;
  return res.redirect("/");
};
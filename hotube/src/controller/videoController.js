import Video from "../models/Video";

// callback 방식을 사용하려는데 최신버전은 callback문법을 사용할수없어서 promise로 구현함.
export const homeVideo = async (req, res) => {
  const video = await Video.find({});
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
  const description = req.body.description;
  const createdBy = req.body.createdBy;
  const hashTag = req.body.hashTag;
  const createVideo = new Video({
    title: title,
    description: description,
    createdBy: createdBy,
    createdAt: Date.now(),
    hashTag: hashTag.split(",").map(word => `#${word}`),
    meta: {
      rating: 0,
      views: 0,
    },
  });
  console.log(createVideo);
  return res.redirect("/");
};
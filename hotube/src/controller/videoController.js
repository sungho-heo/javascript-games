let videos = [
  {
    title: "god die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 12,   
    id: 1,
  },
  {
    title: "god secode die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 20,
    id: 2
  },
  {
    title: "god third die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 2,
    id: 3
  },
  {
    title: "god fourth die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 5,
    id: 4
  },

]
export const homeVideo = (req, res) => {
    return res.render("home", { pageTitle: "Home" ,videos:videos });
};

export const seeVideo = (req, res) => {
    const id = req.params.id;
    const videoId = videos[id - 1]; 
    return res.render("watch", { pageTitle: `Watching: ${videoId.title}`, videoId: videoId });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const videoId = videos[id - 1];
    return res.render("edit", { pageTitle: `Editing: ${videoId.title}`, videoId: videoId });
};

export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  return res.redirect("/");
};
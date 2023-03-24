const videos = [
  {
    title: "god die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 12,
  },
  {
    title: "god secode die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 12,
  },
  {
    title: "god third die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 12,
  },
  {
    title: "god fourth die",
    createBy: "GOD",
    views: 12,
    createdAt: "2 minutes",
    comments: 12,
  },

]
export const homeVideo = (req, res) => {
    res.render("home", { pageTitle: "Home" ,videos:videos });
};

export const seeVideo = (req, res) => {
    res.render("watch", { pageTitle: "Watch" });
};

export const edit = (req, res) => {
    res.render("edit", { pageTitle: "Edit" });
};

export const search = (req, res) => {
    return res.send("video search page");
};

export const deleteVideo = (req, res) => {
    return res.send("video delete page");
};

export const upload = (req, res) => {
    return res.send("video upload page");
};
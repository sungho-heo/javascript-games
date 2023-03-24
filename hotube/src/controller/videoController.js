export const homeVideo = (req, res) => {
    res.render("home", { pageTitle: "Home" });
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
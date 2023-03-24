export const homeVideo = (req, res) => {
    return res.render("home");
};

export const seeVideo = (req, res) => {
    return res.send(`watch page #${req.params.id}`);
};

export const edit = (req, res) => {
    return res.send("video edit page");
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
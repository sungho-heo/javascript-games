export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  console.log(req.body);
  return res.render("join", { pageTitle: "Join" })
}
export const edit = (req, res) => {
  return res.send("user-edit page");
};

export const userDelete = (req, res) => {
  return res.send("user-delete page");
};

export const login = (req, res) => {
  return res.send("user-login page");
};

export const seeUser = (req, res) => {
    return res.send("see-user page");
};

export const logout = (req, res) => {
  return res.send("user-logout page");
};
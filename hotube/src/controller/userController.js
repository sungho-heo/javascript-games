import User from "../models/User.js";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const nickname = req.body.nickname;
  const location = req.body.location;
  await User.create({
    email: email,
    username: username,
    password: password,
    nickname: nickname,
    location: location,
  });
  return res.redirect("/login");
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
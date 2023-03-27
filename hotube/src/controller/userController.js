import User from "../models/User.js";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;
  const nickname = req.body.nickname;
  const location = req.body.location;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: pageTitle,
      errorMessage: "Password confirmation does not match ",
    });
  };
  const exists = User.exists({
    $or: [{ email: email, username: username, nickname: nickname }],
  });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: pageTitle,
      errorMessage: "The email/username/nickname alrady taken",
    });
  };
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
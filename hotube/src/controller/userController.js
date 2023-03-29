import User from "../models/User.js";
import fetch from "cross-fetch";
import bcrypt from "bcrypt";

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
  const exists = await User.exists({
    $or: [{ email: email, username: username, nickname: nickname }],
  });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: pageTitle,
      errorMessage: "The email/username/nickname alrady taken",
    });
  };
  try {
    await User.create({
      email: email,
      username: username,
      password: password,
      nickname: nickname,
      location: location,
    });
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle: pageTitle, errorMessage: error._message });
  }
  return res.redirect("/login");
};
export const getLogin = (req, res) => {
  return res.render("login", {pageTitle:"Log in"});
};

export const postLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const pageTitle = "Log in"
  const user = await User.findOne({ username: username, socialOnly: false });
  if (!user) {
    return res
      .status(400)
      .render("login", {
        pageTitle: pageTitle,
        errorMessage: "An account with this username does not exists.",
      })
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res
      .status(400)
      .render("login", { pageTitle: pageTitle, errorMessage: "Wrong Password" })
  };
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const githubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_ID,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const connectUrl = `${baseUrl}?${params}`;
  return res.redirect(connectUrl);
};

export const githubCallback = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_ID,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const connectUrl = `${baseUrl}?${params}`;
  const getToken =await (await fetch(connectUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
  ).json();
  if ("access_token" in getToken) {
    const accessToken = getToken.access_token;
    const getRequestUrl = "https://api.github.com";
    const userRequest = await (
      await fetch(`${getRequestUrl}/user`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
      })
    ).json();
    console.log(userRequest);
    const emailRequest = await (await fetch(`${getRequestUrl}/user/emails`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })).json();
    const emailObj = emailRequest.find((email) => email.primary === true && email.verified === true);
    if (!emailObj) {
      return res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
        user = await User.create({
        username: userRequest.login,
        email: emailObj.email,
        nickname: userRequest.name,
        password: "",
        socialOnly: true,
        location: userRequest.location,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect("/login");
  }
};
export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const edit = (req, res) => {
  return res.send("user-edit page");
};

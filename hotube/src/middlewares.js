export const middleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    console.log(req.session.user);
    res.locals.user = req.session.user || {};
    next();
};

export const userProtectMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
        next();
    } else {
        return res.redirect("/login");
    }
};

export const publicMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        next();
    } else {
        return res.redirect("/");
    }
};
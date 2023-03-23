import express from "express";

const PORT = 4000;
const app = express();

const handleGet = (req,res) => {
    return res.status(404).send("Sorry, we cannot find that!");

};

const goMiddleware = (req, res, next) => {
    console.log(`you go next page ${req.url}`);
    next()
};

const handleLogin = (req, res) => {
    return res.send("welcome to login page");
};
app.get("/", goMiddleware,handleGet);

app.get("/login", handleLogin);

const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`)

app.listen(PORT, handleAppListen);

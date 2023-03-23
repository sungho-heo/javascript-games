import express from "express";

const PORT = 4000;
const app = express();

const handleGet = (req,res) => {
    return res.status(404).send("Sorry, we cannot find that!");

};

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
};

const handleLogin = (req, res) => {
    return res.send("welcome to login page");
};


app.get("/", logger,handleGet);
app.get("/login", logger,handleLogin);

const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`)

app.listen(PORT, handleAppListen);

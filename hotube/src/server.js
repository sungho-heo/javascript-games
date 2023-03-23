import express from "express";

const PORT = 4000;
const app = express();

const handleGet = (req,res) => {
    return res.send("good guy welcome");
};

const handleLogin = (req, res) => {
    return res.send("welcome to login page");
};
app.get("/", handleGet);

app.get("/login", handleLogin);

const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`)

app.listen(PORT, handleAppListen);

import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const loggerMorgan = morgan("dev");

const handleGet = (req,res) => {
    return res.status(404).send("Sorry, we cannot find that!");

};

// const logger = (req, res, next) => { me middlewares
//     console.log(`${req.method} ${req.url}`);
//     next()
// };

const handleLogin = (req, res) => {
    return res.send("welcome to login page");
};

// logger는 사용자가 어떤 페이지를 향하며 http method를 어떤걸 하는지 확인하기 위함.
app.use(loggerMorgan);
app.get("/", handleGet);
app.get("/login", handleLogin);

const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`)

app.listen(PORT, handleAppListen);

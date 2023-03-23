import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const loggerMorgan = morgan("dev");

const globalRouter = express.Router();

const handlerHome = (req, res, next) => {
    return res.send("Home")
}
globalRouter.get("/", handlerHome);

const userRouter = express.Router();
const handlerEdit = (req, res, next) => {
    return res.send("user-edit page");
};
userRouter.get("/edit", handlerEdit);

const videoRouter = express.Router();
const handlerWatch = (req, res, next) => {
    return res.send("watch page");
}
videoRouter.get("/watch", handlerWatch);

// logger는 사용자가 어떤 페이지를 향하며 http method를 어떤걸 하는지 확인하기 위함.
app.use(loggerMorgan);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`)

app.listen(PORT, handleAppListen);

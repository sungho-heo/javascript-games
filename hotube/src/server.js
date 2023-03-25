import "./db";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();

const loggerMorgan = morgan("dev");

app.set("views", process.cwd() + "/src/views")
app.set("view engine", "pug");
app.use(loggerMorgan); // logger는 사용자가 어떤 페이지를 향하며 http method를 어떤걸 하는지 확인하기 위함.
app.use(express.urlencoded({ extended: true })); //pug의 body데이터 받아오기위해서 필요한 작업임.
app.use("/", globalRouter); // home url router의 /안의 또다른 url router를 찾음 동일하면 그 해당하는 url페이지를 보여줌
app.use("/users", userRouter); // userrouter 안에 있는 url router를 찾음 해당하는 페이지를 찾으면 그 해당하는 페이지를 보여줌.
app.use("/videos", videoRouter);

const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`);

app.listen(PORT, handleAppListen);

import express from "express";

const PORT = 4000;
const app = express();

const handleGet = () => console.log("Sombody is try go home");

app.get("/", handleGet);

const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`)

app.listen(PORT, handleAppListen);

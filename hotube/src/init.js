import "./db";
import "./models/Video";
import "./models/User"
import app from "./server.js";

const PORT = 4000;


const handleAppListen = () => console.log(`good app:http://localhost:${PORT}/`);

app.listen(PORT, handleAppListen);

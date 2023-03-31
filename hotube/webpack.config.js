const path = require("path");
// console.dir(__dirname);
// console.dir(path.resolve("src","frontend"));
module.exoprts = {
    entry: "./src/client/js/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "assets", "js"),
    },
};
const electron = require("electron");
const path = require("path");
const app = electron.app;

let window;

app.on("ready", () => {
    window = new electron.BrowserWindow({ width: 1280, height: 720, autoHideMenuBar: true, backgroundColor: "#000" });
    window.loadFile(path.join(__dirname, "./interfaces/desktop.html"));
});
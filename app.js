const express = require("express");
const app = express();
const port = 3000;
const server = app.listen(port, () => { console.log("server listening  at port number", port) })

app.set("view engine", "pug");
app.set("views", "views");
app.get("/", (req, res, next) => {
    res.status(200).render("home");

})
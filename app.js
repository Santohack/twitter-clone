const express = require("express");
const app = express();
const port = 3000;
const middleWere = require("./middlewere");
const path = require('path');
const server = app.listen(port, () => { console.log("server listening  at port number", port) })

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "/public")));

const loginRoutes = require("./routes/loginRoutes");
app.use("/login", loginRoutes);
const registerRoutes = require("./routes/registerRoutes");
app.use("/register", registerRoutes);
app.get("/", middleWere.requirLogin, (req, res, next) => {
    var payload = {
        pageTitle: "Welcome"
    }
    res.status(200).render("home", payload);

})
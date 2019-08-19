// Dependencies
var express = require("express");
var path = require("path");

// Express
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
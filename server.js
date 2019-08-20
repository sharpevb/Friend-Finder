// Dependencies
var express = require("express");

// Express
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

// Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log("Server listening on: http://localhost:" + PORT);
});


// Dependencies
var express = require("express");

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
    console.log("Server listening on: http://localhost:" + PORT);
});


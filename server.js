var express = require("express");
var bodyparser = require("body-parser");
var path = require("path")

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true}));

app.use(bodyparser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on : http://localhost: " + PORT)
})


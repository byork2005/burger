var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));

app.engine("handlebars", handlebars({ defaultLayout: "main"}))
app.set("view engine", "handlebars");

app.use("/", routes);
app.listen(port, function()
{
    console.log("Listening on Port:" + port)
});



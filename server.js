var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({ defaultLayout: "main"}))
app.set("view engine", "handlebars");

app.use("/", routes);
app.listen(port, function(err)
{
    if(err)
    {
        console.error("server.js - error connecting: " + err);
        return;    
    } 
    console.log("Listening on Port:" + port)
});



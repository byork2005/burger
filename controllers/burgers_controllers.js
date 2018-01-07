var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(request, response)
{
    burger.all(function(data)
    {
        var handlebarsObj = {
            burgers: data
        };
        response.render("index", handlebarsObj)
    })
});

router.post("/", function(request, response) 
{
    burger.create(
    [
      "burger_name", "devoured"
    ], [
      request.body.burger_name, 0
    ], function() 
    {
      response.redirect("/");
    })
  });

  router.put("/:id", function(request, response) 
  {
    var condition = "id = " + request.params.id;
  
    console.log("condition", condition);
  
    burger.update(
    {
      devoured: request.body.devoured
    }, condition, function() 
    {
      response.redirect("/");
    });
  });

module.exports = router;
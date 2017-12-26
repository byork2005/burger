var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res)
{
    burger.allBurgers(function(data)
    {
        var handlebarsObj = {
            burgers: data
        };
    })
});

router.post("/", function(req, res)
{
    burger.newBurger(req.body.burger_name, function()
    {
        res.redirect("/");
    })
});

router.put("/:id", function(req, res)
{
    burger.updateBurger(1, req.params.id, function()
    {
        res.redirect("/");
    })
})

module.exports = router;
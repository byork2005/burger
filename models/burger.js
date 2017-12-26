var orm = require("../config/orm.js");

var burger = {
    allBurgers: function(callback) 
    {
        orm.selectAll("burgers", function(res)
        {
            callback(res);
        })
    },

    newBurger: function(input, callback)
    {
        orm.insertOne("burgers", "burger_name", input, function(res)
        {
            callback(res);
        })
    },

    updateBurger: function(status, id, callback)
    {
        orm.updateOne("burgers", "devoured", status, id, function(res)
        {
            callback(res);
        })
    }
}

module.exports = burger;
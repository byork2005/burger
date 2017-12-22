/* make queries that will
selectAll()
insertOne()
updateOne()

if issues check file path to connection.js, it may need a / */

var connection = require("connection.js")

var orm = {
    selectAll: function(table, callback)
    {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result)
        {
            if(err) throw err;
            callback(result);
        });
    },

    insertOne: function(table, input, callback)
    {
        var queryString = "INSERT INTO burgers_DB (" + table + ") VALUES (" + input.toString() + ")"; 

        connection.query(queryString, input, function(err, result)
        {
            if(err) throw (err);
            callback(result);
        })
    },

    updateOne: function(table, devour, callback)
    {
        // need code
    },


}

module.exports = orm;
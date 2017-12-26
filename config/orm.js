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

    insertOne: function(table, colName, input, callback)
    {
        var queryString = "INSERT INTO " + table + " (" + colName + ") VALUES (" + input.toString() + ")"; 

        connection.query(queryString, input, function(err, result)
        {
            if(err) throw (err);
            callback(result);
        })
    },

    updateOne: function(table, colName, status, id, callback)
    {
        var queryString = "UPDATE " + table + " SET " + colName + "=" + status + " WHERE id =" + id; 
        connection.query(queryString, function(err, result)
        {
            if(err) throw (err);
            callback(result);
        })
    },
}

module.exports = orm;
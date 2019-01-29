//  * Inside the `connection.js` file, setup the code to connect Node to MySQL.
var mysql = require("mysql");


var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as User id: " + connection.threadId);
});

// ORMExport connection for our ORM to use.
module.exports = connection;
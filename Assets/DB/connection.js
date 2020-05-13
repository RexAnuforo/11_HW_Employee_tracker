const util = require("util");
const mysql=requier("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database: "employee"
});

connection.connect();

//converts call back based fct into promise based fct
// call back = fct passed as an arg to another fct
// promise is an object that can be returned synchronously from asychronous fct
connection.query = util.promisify(connection.query);

module.exports = connection;

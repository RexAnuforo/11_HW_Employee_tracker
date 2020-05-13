const connection = require("./connection")

class DB{
    constructor(connection){
        this.connection = connection;
    }
    //find all employees
    findAllEmployees(){
        return this.connection.query(
            // add your query
        )
    }

    //find all empoyees except the given employee id
    findEmployeesNOTid(){
        return this.connection.query(
            
        )
    }


    //create a new employee
    createEmployee(employee){
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

      


}

module.exports = new DB(connection)
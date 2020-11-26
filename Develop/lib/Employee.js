// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

function getName() {
    return this.name;
}

function getId() {
    return this.id;
}

function getEmail() {
    return this.email;
}

function getRole() {
    return "Employee";
}


module.exports = Employee;


// The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// The other three classes will extend Employee.
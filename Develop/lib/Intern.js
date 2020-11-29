// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getName() {
        // answer.internName = name;
        return this._name;
    }
    getId() {
        // answer.internId = id;
        return this.id;
    }
    getEmail() {
        // answer.internEmail = email;
        return this.email;
    }
    getSchool() {
        // answer.internSchool = school;
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

var intern = new Intern(name, id, email, school);

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();

module.exports = Intern;

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'
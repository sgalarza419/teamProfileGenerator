// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.



class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

function getSchool() {
    return school;
}

function getRole() {
    return "Intern";
}

module.exports = Intern;

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'
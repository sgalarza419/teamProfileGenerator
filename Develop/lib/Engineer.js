// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

function getGithub() {
    return this.github;
}

function getRole() {
    return "Engineer";
}

module.exports = Engineer;


// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'
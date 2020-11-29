// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getName() {
        answer.engineerName = name;
        return this.name;
    }
    getId() {
        answer.engineerId = id;
        return this.id;
    }
    getEmail() {
        answer.engineerEmail = email;
        return this.email;
    }
    getGithub() {
        answer.engineergitHub = github;
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();

var engineer = new Engineer(name, id, email, github);

module.exports = Engineer;


// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'
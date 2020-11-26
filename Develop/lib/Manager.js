// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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

function getOffice() {
    return this.officeNumber;
}

function getRole() {
    return "Manager";
}

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
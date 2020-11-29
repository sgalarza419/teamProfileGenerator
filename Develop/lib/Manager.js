// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName() {
        // answer.managerName = name;
        return this.name;
    }
    getId() {
        // answer.managerId = id;
        return this.id;
    }
    getEmail() {
        // answer.managerEmail = email;
        return this.email;
    }
    getOffice() {
        // answer.managerOfficeNumber = officeNumber;
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

var manager = new Manager(name, id, email, officeNumber);

manager.getName();
manager.getId();
manager.getEmail();
manager.getOffice();
manager.getRole();

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is the Manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "office"
    }
]).then(function(answer) {
    console.log(answer);
});


class manager {
    constructor(name, id, email, office, school, username) {
        this.name = managerName;
        this.id = id;
        this.email = email;
        this.office = office;
    }
    printInfo() {
        console.log('Name: ${this.managerName}');
        console.log('Name: ${this.id}');
        console.log('Name: ${this.email}');
        console.log('Name: ${this.office}');
    }
}

const manager = new manager();

manager.printInfo();

module.exports = manager;
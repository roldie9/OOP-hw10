const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the employee name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's office number?",
        name: "office"
    },
    {
        type: "input",
        message: "What is the employee's school?",
        name: "school"
    },
    {
        type: "input",
        message: "What is the employee's GitHub username?",
        name: "username"
    }
]).then(function(answer) {
    console.log(answer);
});


class employee {
    constructor(name, id, email, office, school, username) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.school = school;
        this.username = username;
    }
    printInfo() {
        console.log('Name: ${this.name}');
        console.log('Name: ${this.id}');
        console.log('Name: ${this.email}');
        console.log('Name: ${this.office}');
        console.log('Name: ${this.school}');
        console.log('Name: ${this.username}');
    }
}

const employee = new employee();

employee.printInfo();

module.exports = employee;
const employee = require("./employee");

const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the intern's name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    },
]).then(function(answer) {
    console.log(answer);
});

class intern extends employee {
    constructor(employeeName, id, email, school) {
        this.name = employeeName;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    printInfo() {
        console.log('Name: ${this.employeeName}');
        console.log('Name: ${this.id}');
        console.log('Name: ${this.email}');
        console.log('Name: ${this.school}');
    }
}

module.exports = intern;

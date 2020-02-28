const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
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

class intern {
    constructor(internName, id, email, school) {
        this.name = internName;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    printInfo() {
        console.log('Name: ${this.internName}');
        console.log('Name: ${this.id}');
        console.log('Name: ${this.email}');
        console.log('Name: ${this.school}');
    }
}

module.exports = intern;

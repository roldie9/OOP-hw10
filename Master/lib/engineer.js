const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "username"
    }
]).then(function(answer) {
    console.log(answer);
});

class engineer {
    constructor(engineerName, id, email, username) {
        this.name = engineerName;
        this.id = id;
        this.email = email;
        this.username = username;
    }
    printInfo() {
        console.log('Name: ${this.engineerName}');
        console.log('Name: ${this.id}');
        console.log('Name: ${this.email}');
        console.log('Name: ${this.username}');
    }
}

const engineer = new engineer();

module.exports = engineer;
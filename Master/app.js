const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​

inquirer.prompt ([
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "role",
        choices: ["manager", "engineer", "intern"]
    }
   
]).then(function(answer) {

    console.log(answer);

    if (answer.role === "manager") {
        answer.role = manager;
    }
    if (answer.role === "engineer") {
        answer.role = engineer;
    }
    if (answer.role === "intern") {
        answer.role = intern
    }

    fs.writeFile("Master\templates\main.html", answer, function() {
    });
});
​
module.exports = employee;


const team = $.templates("team.html");

const html = team.render({
});

$("#employeeName").html(html);
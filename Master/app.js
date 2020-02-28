const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
​
// const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer.prompt ([
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "role",
        choices: ["manager", "engineer", "intern"]
    },
   
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

    // fs.writeFile("Master\templates\main.html", answer, function() {

    });
});
​
module.exports = team;

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

const inquirer = require("inquirer");

const DEBUG = false;

const questions = [
    {
        type: "input",
        name: "text_content",
        message: "Please enter up to three characters to display on the logo:",
        // validate?
    }, 
    {
        type: "input",
        name: "text_color",
        message: "Please enter the desired text color (keyword or hexcode):",
        // validate?
    }, 
    {
        type: "list",
        name: "shape_option",
        message: "Please enter the logo shape from the following:",
        choices: ["Circle", "Triangle", "Square"]
    }, 
    {
        type: "input",
        name: "shape_color",
        message: "Please enter the desired shape color (keyword or hexcode):",
        // validate?
    }
]

function init() {
    // inquirer prompts for shape properties
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            //console.log("Generated logo.svg");
        })

    // build shape
}

init();

if (DEBUG) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: "test",
                message: "type test message",
            }
        ])
        .then((answers) => {
            console.log(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
            console.log("tty error");
        } else {
            console.log("error");
        }
  });
}
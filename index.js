const inquirer = require("inquirer");

const shapeLib = require("./lib/shapes.js");
const Circle = shapeLib.Circle;
const Triangle = shapeLib.Triangle;
const Square = shapeLib.Square;

const textLib = require("./lib/text.js");
const Text = textLib.Text;

const DEBUG = true;

const questions = [
    {
        type: "list",
        name: "shapeOption",
        message: "Please enter the logo shape from the following:",
        choices: ["Circle", "Triangle", "Square"]
    }, 
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter the desired shape color (keyword or hexcode):",
        // validate: hexcode or keyword
    },
    {
        type: "input",
        name: "textContent",
        message: "Please enter up to three characters to display on the logo:",
        // validate: three characters or less
    }, 
    {
        type: "input",
        name: "textColor",
        message: "Please enter the desired text color (keyword or hexcode):",
        // validate: hexcode or keyword
    }
]

function init() {
    // inquirer prompts for shape properties
    inquirer.prompt(questions)
        .then((answers) => {
            if (DEBUG) {
                console.log(answers);
            }
            let shape;
            switch (answers.shapeOption) {
                case "Circle":
                    shape = new Circle();
                    break;
                case "Triangle":
                    shape = new Triangle();
                    break;
                case "Square":
                    shape = new Square();
                    break;
                default: // Is never reached as shape_option is generated from set list
                    break;
            }
            shape.setColor(answers.shapeColor);

            if (DEBUG) {
                console.log(shape.render());
            }

            let text = new Text(answers.textContent);
            text.setColor(answers.textColor);

            if (DEBUG) {
                console.log(text.render());
            }

            // write to file
            //console.log("Generated logo.svg");
        })
}

init();

if (false) {
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
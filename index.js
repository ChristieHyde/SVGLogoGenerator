const inquirer = require("inquirer");
const fs = require('fs');

const shapeLib = require("./lib/shapes.js");
const Circle = shapeLib.Circle;
const Triangle = shapeLib.Triangle;
const Square = shapeLib.Square;

const textLib = require("./lib/text.js");
const Text = textLib.Text;

const DEBUG = false;

const QUESTIONS = [
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
    },
    {
        type: "input",
        name: "textContent",
        message: "Please enter up to three characters to display on the logo:",
    }, 
    {
        type: "input",
        name: "textColor",
        message: "Please enter the desired text color (keyword or hexcode):",
    }
]

// SVG specifications and starter code
const SVG_WIDTH = 300;
const SVG_HEIGHT = 200;
const SVG_HEADER = `<svg version="1.1" width="${SVG_WIDTH}" height="${SVG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">`
const SVG_FOOTER = `</svg>`;

function init() {
    // Inquirer prompt for SVG properties
    inquirer.prompt(QUESTIONS)
        .then((answers) => {
            if (DEBUG) {
                console.log(answers);
            }
            // Build shape depending on selected option
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

            // Build text content from inputs
            let text = new Text(answers.textContent);
            text.setColor(answers.textColor);

            if (DEBUG) {
                console.log(text.render());
            }

            // Write to file
            const svgContents = `${SVG_HEADER}\n\n  ${shape.render()}\n\n  ${text.render()}\n\n${SVG_FOOTER}`;
            fs.writeFile("logo.svg", svgContents, () => {});
            console.log("Generated logo.svg");
        })
}

init();

// INQUIRER TEST CODE
// From https://www.npmjs.com/package/inquirer/v/8.2.4?activeTab=readme
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
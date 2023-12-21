# SVG Logo Maker
## Description
This project is a command-line SVG logo generator. It can be used to create simple logo images from text input.

## Installation
An installation of Node.js is required to run the project.
Installation instructions are as follows:
- Download the project files.
- In the user's preferred command line application, run `npm install` or `npm i` inside the project folder.

## Usage
Demonstration video is provided at the following URL: //
Users can run the project through Node on their preferred command line. The `node index.js` command will start the program.

Once the program is running, a series of questions will be displayed on the command line. Users can type their responses to these questions to have them saved into the program. The questions will determine the logo's background shape and colour, as well as a text input of up to three characters, as well as its colour. Colours are validated as CSS keywords or hexcodes.

Using this information, the program will generate a 300x200 pixel image containing the generated logo. If any input is invalid according to the criteria (three characters for the text, CSS-valid colour choices), an error will be displayed instead.

## Credits
This project uses the following NPM packages:
- Inquirer (https://www.npmjs.com/package/inquirer/v/8.2.4)
- Jest (https://www.npmjs.com/package/jest/v/29.7.0)
- CSS-Color-Names (https://www.npmjs.com/package/css-color-names/v/1.0.1)
Debug code (the Inquirer package test at line 89 of index.js) was sourced and adapted from the Inquirer package NPM page.
Sample Jest test (line 9 of shapes.test.js) supplied by the project specification (University of Western Australia Coding Boot Camp).
All other code was written by Christie Hyde for this project.
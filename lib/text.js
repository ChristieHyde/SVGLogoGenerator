const validateColor = require('./colors.js')

const SVG_WIDTH = 300;
const SVG_HEIGHT = 200;

class Text {
    constructor(content) {
        validateText(content);
        this.content = content;
        this.x = SVG_WIDTH/2;
        this.y = SVG_HEIGHT/2 + 25;
        this.fontSize = 60;
        this.textAnchor = "middle";
        this.setColor = function (color) {
            validateColor(color);
            this.fill = color;
        };
    } 
}

Text.prototype.render = function () {
    return (`<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.fill}">${this.content}</text>`);
};

function validateText(text) {
    if (text.length > 3) {
        throw new Error('Text must be 3 characters or shorter');
    }
}

module.exports = {Text};
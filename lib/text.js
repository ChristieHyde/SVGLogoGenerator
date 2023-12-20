const SVG_WIDTH = 300;
const SVG_HEIGHT = 200;

class Text {
    constructor(content) {
        this.content = content;
        this.x = SVG_WIDTH/2;
        this.y = SVG_HEIGHT/2 + 25;
        this.fontSize = 60;
        this.textAnchor = "middle";
        this.setColor = function (color) {
            this.fill = color;
        };
        this.validateText = function (text) {
            return (text.length <= 3);
        }
    } 
}

Text.prototype.render = function () {
    return (`<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.fill}">${this.content}</text>`);
};

module.exports = {Text};
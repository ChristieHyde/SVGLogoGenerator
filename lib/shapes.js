const validateColor = require('./colors.js')

const SVG_WIDTH = 300;
const SVG_HEIGHT = 200;

// Base Shape class
class Shape {
    constructor() {
        this.setColor = function (color) {
            validateColor(color);
            this.fill = color;
        };
    }
}

// Circle class
class Circle extends Shape {
    constructor() {
        super();
        this.cx=SVG_WIDTH/2;
        this.cy=SVG_HEIGHT/2;
        this.r = 80;
    }
}

Circle.prototype.render = function () {
    return(`<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`);
};

// Square class
class Square extends Shape {
    constructor() {
        super();
        this.width=160;
        this.height=160;
        this.x=(SVG_WIDTH-this.width)/2;
        this.y=(SVG_HEIGHT-this.height)/2;
    }
}

Square.prototype.render = function () {
    return(`<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`);
};

// Triangle class
class Triangle extends Shape {
    constructor() {
        super();
        this.points="150, 18 244, 182 56, 182";
    }
}

Triangle.prototype.render = function () {
    return(`<polygon points="${this.points}" fill="${this.fill}" />`);
};

// Exports: Circle, Triangle and Square classes
module.exports = {Circle, Triangle, Square};
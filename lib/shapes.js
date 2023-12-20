class Shape {
    constructor() {
        this.setColor = function (color) {
            this.fill = color;
        };
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.cx=150;
        this.cy=100;
        this.r = 80;
    }
}

Circle.prototype.render = function () {
    return(`<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`);
};

class Square extends Shape {
    constructor() {
        super();
        this.x=70;
        this.y=20;
        this.width=160;
        this.height=160;
    }
}

Square.prototype.render = function () {
    return(`<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`);
};

class Triangle extends Shape {
    constructor() {
        super();
        this.points="150, 18 244, 182 56, 182";
    }
}

Triangle.prototype.render = function () {
    return(`<polygon points="${this.points}" fill="${this.fill}" />`);
};

module.exports = {Circle, Triangle, Square};
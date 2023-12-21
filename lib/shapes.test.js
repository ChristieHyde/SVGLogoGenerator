const shapeLib = require('./shapes.js');
const Circle = shapeLib.Circle;
const Triangle = shapeLib.Triangle;
const Square = shapeLib.Square;

describe('Shape Validation', () => {
    describe('Valid Triangle', () => {
        it('should construct a valid triangle shape from the inputs', () => {
            // Sample test from challenge specification
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        });
    });
    describe('Valid Square', () => {
        it('should construct a valid square shape from the inputs', () => {
            const shape = new Square();
            shape.setColor("lime");
            expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="lime" />')
        });
    });
    describe('Valid Circle', () => {
        it('should construct a valid circle shape from the inputs', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
        });
    });
});
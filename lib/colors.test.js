const validateColor = require('./colors.js');

describe('Color Validation', () => {
    describe('Valid Keyword', () => {
        it('should return true if the color is a valid CSS color keyword', () => {
            const color = "blue";
            const validate = validateColor(color);
            expect(validate).toEqual(true);
        });
    });
    describe('Short Hexcode', () => {
        it('should throw an error if the color hexcode is too short', () => {
            const color = "#333";
            const err = new Error("Color must be a valid keyword or hexcode");
            const validate = () => validateColor(color);
            expect(validate).toThrowError(err);
        });
    });
    describe('No Hash', () => {
        it('should throw an error if the color hexcode does not start with a hash', () => {
            const color = "$d44b89";
            const err = new Error("Color must be a valid keyword or hexcode");
            const validate = () => validateColor(color);
            expect(validate).toThrowError(err);
        });
    });
    describe('Invalid Hex Character', () => {
        it('should throw an error if the color hexcode contains an invalid character', () => {
            const color = "#d4nb89";
            const err = new Error("Color must be a valid keyword or hexcode");
            const validate = () => validateColor(color);
            expect(validate).toThrowError(err);
        });
    });
    describe('Valid Hexcode', () => {
        it('should return true if the color is a valid CSS color hexcode', () => {
            const color = "#d44b89";
            const validate = validateColor(color);
            expect(validate).toEqual(true);
        });
    });
    describe('Uppercase Hexcode', () => {
        it('should return true if the color hexcode contains uppercase letters', () => {
            const color = "#D44B89";
            const validate = validateColor(color);
            expect(validate).toEqual(true);
        });
    });
});
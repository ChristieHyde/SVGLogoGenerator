const textLib = require("./text.js");
const Text = textLib.Text;

describe('Text Validation', () => {
    describe('Long Text', () => {
        it('should throw an error indicating that the text is too long', () => {
            const text = () => new Text("bees");
            const err = new Error('Text must be 3 characters or shorter');
            expect(text).toThrowError(err);
        })
    });
    describe('Valid Text', () => {
        it('should construct a valid text object from the input', () => {
            const text = new Text("bee");
            text.setColor('black')
            expect(text.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">bee</text>');
        })
    });
    describe('Empty Text', () => {
        it('should construct a valid text object from an empty input', () => {
            const text = new Text("");
            text.setColor('white')
            expect(text.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text>');
        })
    });
});

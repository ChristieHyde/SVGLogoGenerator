const cssColors = require('css-color-names');
const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

const validateColor = (color) => {
    console.log(hexCharacters.find((char) => char === "d"));
    // First test for color keyword
    if (cssColors[color]) {
        return true;
    }

    // Then test for hexcode
    if (color.length !== 7) {
        throw new Error("Color must be a valid keyword or hexcode");
    }
    if (color[0] !== "#") {
        throw new Error("Color must be a valid keyword or hexcode");
    }
    for (const char of color.slice(1)) {
        console.log(hexCharacters);
        if (!(hexCharacters.find(((c) => c === char.toLowerCase())))) {
            throw new Error("Color must be a valid keyword or hexcode");
        }
    }
    return true;
}

module.exports = validateColor;
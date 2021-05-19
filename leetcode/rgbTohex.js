const white = "rgb(225, 225, 225)";

const RGB2HEX = (color) => {
    let rgbString = color.replace('rgb(', '').replace(")", "");
    let formateRGB = rgbString.split(",");
    let formateHEX = [];
    formateRGB.map((col) => {
        formateHEX.push(parseInt(col, 16));
    });
    return formateHEX.join("");
}

const Hex = RGB2HEX(white);
console.log(Hex);
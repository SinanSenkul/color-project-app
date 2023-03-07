import chroma from "chroma-js";

function textColor(color) {
    let tColor = undefined;
    chroma(color).luminance() <= 0.08 ? tColor = "white" : tColor = "black";
    return tColor;
}

export { textColor }
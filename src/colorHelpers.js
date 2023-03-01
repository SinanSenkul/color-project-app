/* const examplePalette = {
    paletteName: "Flat UI Colors v1",
    id: "flat-ui-colors-v1",
    emoji: "🤙",
    colors: [
        { name: "turquoise", color: "#1abc9c" },
        { name: "emerald", color: "#2ecc71" },
        { name: "peterriver", color: "#3498db" },
        { name: "amethyst", color: "#9b59b6" },
        { name: "wetasphalt", color: "#34495e" },
        { name: "greensea", color: "#16a085" },
        { name: "nephritis", color: "#27ae60" },
        { name: "belizehole", color: "#2980b9" },
        { name: "wisteria", color: "#8e44ad" },
        { name: "midnightblue", color: "#2c3e50" },
        { name: "sunflower", color: "#f1c40f" },
        { name: "carrot", color: "#e67e22" },
        { name: "alizarin", color: "#e74c3c" },
        { name: "clouds", color: "#ecf0f1" },
        { name: "concrete", color: "#95a5a6" },
        { name: "orange", color: "#f39c12" },
        { name: "pumpkin", color: "#d35400" },
        { name: "pomegranate", color: "#c0392b" },
        { name: "silver", color: "#bdc3c7" },
        { name: "asbestos", color: "#7f8c8d" }
    ]
} */

import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    for (let level of levels) {
        newPalette.colors[level] = [];
    }
    for (let color of starterPalette.colors) {
        let scale = generateScale(color.color, 10).reverse();
        for (let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }
    return newPalette;
}

function getRange(hexColor) {
    const endColor = "#fff";
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        endColor
    ]
}

function generateScale(hexColor, numOfColors) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);
}

export {generatePalette}
import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Colorbox from "./Colorbox";
import 'rc-slider/assets/index.css';
import './styles/Palette.css';
import Navbar from "./Navbar";
import { generatePalette } from "./colorHelpers";

function Palette(props) {
    var { palettes } = props;
    const { id } = useParams();
    var [level, setLevel] = useState(600);
    var [format, setFormat] = useState('hex');

    function findPalette(id) {
        return palettes.find(palette => palette.id === id);
    }
    const palette = generatePalette(findPalette(id));

    function updateLevel(newLevel) {
        setLevel(level = newLevel);
    }
    function changeFormat(val) {
        setFormat(format = val);
    }

    let paletteName = palette.paletteName;
    let emoji = palette.emoji;
    return (
        <div className="palette-main">
            <Navbar shadeNavbar={false} level={level} updateLevel={updateLevel} changeFormat={changeFormat} />
            <div className="colorbox-container">
                {palette.colors[level].map(color =>
                    <Colorbox
                        background={color[format]}
                        name={color.name}
                        key={color.name}
                        colorId={color.id}
                        paletteId={id}
                        showLink={true}
                    />
                )}
            </div>
            <footer className="footer">
                {paletteName.toLowerCase()}
                <span className="emoji-span">{emoji}</span>
            </footer>
        </div>
    );
}

export default Palette;
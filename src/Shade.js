import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import { styles } from './styles/ShadeStyles';

function Shade(props) {
    const { paletteId, colorId } = useParams();
    const { classes, palettes } = props;
    var [level, setLevel] = useState(600);
    var [format, setFormat] = useState('hex');

    const palette = generatePalette(palettes.find(palette => palette.id === paletteId));

    function gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy))
        }
        return shades.slice(1);
    }

    function changeFormat(val) {
        setFormat(format = val);
    }

    function updateLevel(newLevel) {
        setLevel(level = newLevel);
    }

    const shades = gatherShades(palette, colorId);
    const colorBoxes = shades.map(color =>
        <Colorbox colorId={colorId} paletteId={paletteId} name={color.name} background={color[format]} showLink={false} />
    )
    return (
        <div className={classes.main}>
            <Navbar shadeNavbar={true} level={level} updateLevel={updateLevel} changeFormat={changeFormat} />
            <div className={classes.colorboxContainer}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link style={{ color: shades[7]['hex'] }} className={classes.link} to={`/palette/${paletteId}`}>
                        back to palette
                    </Link>
                </div>
            </div>
            <footer className={classes.footer}>
                {palette.paletteName.toLowerCase()}
                <span className={classes.emojiSpan}>{palette.emoji}</span>
            </footer>
        </div >
    );
}

export default withStyles(styles)(Shade);


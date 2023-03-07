import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import { textAlign } from "@mui/system";

const styles = {
    main: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colorboxContainer: {
        height: "90%",
        display: "flex",
        flexWrap: "wrap",
    },
    footer: {
        backgroundColor: "white",
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bolder"
    },
    emojiSpan: {
        fontSize: "1.5rem"
    },
    goBack: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "flex",
        position: "relative",
        cursor: "pointer",
        marginBottom: "50%",
        backgroundColor: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    link: {
        fontWeight: "bolder",
    }
}

function Shade(props) {
    const { paletteId, colorId } = useParams();
    const { classes } = props;
    var [level, setLevel] = useState(600);
    var [format, setFormat] = useState('hex');

    const palette = generatePalette(seedPalettes.find(palette => palette.id === paletteId));

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
    console.log('shades[0]' + shades[0]['hex']);
    const colorBoxes = shades.map(color =>
        <Colorbox colorId={colorId} paletteId={paletteId} name={color.name} background={color[format]} showLink={false} />
    )
    return (
        <div className={classes.main}>
            <Navbar shadeNavbar={true} level={level} updateLevel={updateLevel} changeFormat={changeFormat} />
            <div className={classes.colorboxContainer}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link style={{ color: shades[7]['hex'] }} className={classes.link} to={`/palette/${paletteId}`}>back to palette</Link>
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


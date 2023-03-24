import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from '@material-ui/styles';
import { styles } from "./styles/PaletteListStyles";

function PaletteList(props) {
    const { classes, palettes, removePalette } = props;
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h4>current palettes:</h4>
                    <Link to="/palette/new"><h4>create new palette</h4></Link>
                </nav>
                <div className={classes.minipalettesContainer}>
                    {palettes.map(palette =>
                        <MiniPalette
                            paletteName={palette.paletteName}
                            emoji={palette.emoji}
                            colors={palette.colors}
                            id={palette.id}
                            removePalette={removePalette}
                        />
                    )}
                </div>
            </div>
        </div >
    );
}

export default withStyles(styles)(PaletteList);


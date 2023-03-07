import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from '@material-ui/styles';
import { styles } from "./styles/PaletteListStyles";

function PaletteList(props) {
    const paletteList = props.seedPalettes;
    const { classes } = props;

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h4>choose a palette:</h4>
                    <Link to="/palette/new"><h4>create new palette</h4></Link>
                </nav>
                <div className={classes.minipalettesContainer}>
                    {paletteList.map(palette =>
                        <MiniPalette {...palette} />
                    )}
                </div>
            </div>
        </div >
    );
}

export default withStyles(styles)(PaletteList);


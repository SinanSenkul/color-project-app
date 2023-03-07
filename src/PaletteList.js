import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import './PaletteList.css';
import MiniPalette from "./MiniPalette";
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        backgroundColor: "blue",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height:"100%"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    minipalettesContainer: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    }
}

function PaletteList(props) {
    const paletteList = props.seedPalettes;
    const { classes } = props;

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h3>choose a palette:</h3>
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


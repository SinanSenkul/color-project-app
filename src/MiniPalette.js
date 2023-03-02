import React, { Component, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/styles';

const styles = {
    main: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        },
        border: "1px solid black"
    },
    colorsContainer: {
        backgroundColor: "gray",

    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    }
}

function MiniPalette(props) {
    const { classes, paletteName, emoji } = props;
    return (
        <div className={classes.main}>
            <div className={classes.colorsContainer}>
                {/* baby color divs here */}
            </div>
            <h5 className={classes.title}>{paletteName?.toLowerCase()}<span className={classes.emoji}>{emoji}</span></h5>
        </div >
    );
}

export default withStyles(styles)(MiniPalette);


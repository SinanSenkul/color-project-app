import React, { Component, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import { styles } from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, id } = props;
    const babyColors = colors.map(color => (
        <div className={classes.babyColor} style={{ backgroundColor: color.color }} key={color.name}></div>
    ))

    const history = useNavigate();
    function handleClick(e) {
        e.preventDefault();
        history(`/palette/${id}`);
    }

    return (
        <div className={classes.main} onClick={handleClick}>
            <div className={classes.colorsContainer}>
                {babyColors}
            </div>
            <p className={classes.title}><b>{paletteName?.toLowerCase()}<span className={classes.emoji}>{emoji}</span></b></p>
        </div >
    );
}

export default withStyles(styles)(MiniPalette);


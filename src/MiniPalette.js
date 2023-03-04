import React, { Component, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
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
        border: "1px solid black",
        display: "flex",
        flexDirection: "column"
    },
    colorsContainer: {
        backgroundColor: "white",
        height: "150px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "0.3rem"
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
    },
    babyColor: {
        width: "20%",
        height: "2.2rem",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-0.5rem"
    }
}



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


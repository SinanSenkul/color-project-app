import React from "react";
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { styles } from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, id, removePalette } = props;
    const babyColors = colors.map(color => (
        <div className={classes.babyColor} style={{ backgroundColor: color.color }} key={color.name}></div>
    ))

    const history = useNavigate();
    
    function handleClick(e) {
        e.preventDefault();
        history(`/palette/${id}`);
    }

    function handleRemove(e){
        e.stopPropagation();
        removePalette(id);
    }

    return (
        <div className={classes.main}>
            <div className={classes.deleteIcon}>
                <i className="material-icons" onClick={handleRemove}>delete</i>
            </div>
            <div className={classes.colorsContainer} onClick={handleClick}>
                {babyColors}
            </div>
            <p className={classes.title}><b>{paletteName?.toLowerCase()}<span className={classes.emoji}>{emoji}</span></b></p>
        </div >
    );
}

export default withStyles(styles)(MiniPalette);


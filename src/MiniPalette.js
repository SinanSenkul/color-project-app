import React from "react";
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { styles } from "./styles/MiniPaletteStyles";
import PaletteRemoveDialog from "./PaletteRemoveDialog";

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

    function handleRemove(e) {
        e.stopPropagation();
        removePalette(id);
    }

    return (
        <div className={classes.main}>
            <div className={classes.colorsContainer} onClick={handleClick}>
                {babyColors}
            </div>
            <div className={classes.bottomInfoContainer}>
                <p className={classes.title}><b>{paletteName?.toLowerCase()}<span className={classes.emoji}>{emoji}</span></b></p>
                <div className={classes.deleteIcon}>
                    <PaletteRemoveDialog handleRemove={handleRemove} />
                </div>
            </div>
        </div >
    );
}

export default withStyles(styles)(MiniPalette);


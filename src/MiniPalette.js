import React, { memo, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { styles } from "./styles/MiniPaletteStyles";
import PaletteRemoveDialog from "./PaletteRemoveDialog";

const MiniPalette = memo(function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, id, removePalette } = props;
    console.log('rendering ' + paletteName);
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

    const memoizedHandleClick = useCallback(handleClick, []);
    const memoizedHandleRemove = useCallback(handleRemove, []);

    return (
        <div className={classes.main}>
            <div className={classes.colorsContainer} onClick={memoizedHandleClick}>
                {babyColors}
            </div>
            <div className={classes.bottomInfoContainer}>
                <p className={classes.title}><b>{paletteName?.toLowerCase()}<span className={classes.emoji}>{emoji}</span></b></p>
                <div className={classes.deleteIcon}>
                    <PaletteRemoveDialog handleRemove={memoizedHandleRemove} />
                </div>
            </div>
        </div >
    );
});

export default withStyles(styles)(MiniPalette);


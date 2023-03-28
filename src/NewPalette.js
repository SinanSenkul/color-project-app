import React, { Component, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from "@mui/material";
import { textColor } from "./textColor";
import DraggableColorList from "./DraggableColorList";
import NewPaletteNav from "./NewPaletteNav";
import ColorPicker from "./ColorPicker";
import { styles, drawerWidth, Main, DrawerHeader } from './styles/NewPaletteStyles';

function NewPalette(props) {
    const { classes, savePalette, palettes } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    var [colorPicked, setColor] = React.useState('blue');
    var [textClr, setTextColor] = React.useState('white');
    var [colors, setColors] = React.useState([]);
    var [colorName, setName] = React.useState('');
    var [paletteName, setNPName] = React.useState('');
    var [emoji, setEmoji] = React.useState('🎨');
    const history = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function handleColorChange(color) {
        setColor(colorPicked = color.hex);
        let newTextColor = textColor(color.hex);
        setTextColor(textClr = newTextColor);
    }

    function handleNameChange(e) {
        setName(colorName = e.target.value);
    }

    function addColor() {
        const newColor = {
            name: colorName,
            color: colorPicked
        }
        setColors([...colors, newColor]);
    }

    function handleSubmit() {
        let newPaletteName = paletteName;
        let newId = newPaletteName.toLowerCase().replace(/ /g, "-");
        const newPalette = {
            paletteName: newPaletteName,
            id: newId,
            emoji: emoji,
            colors: colors
        }
        savePalette(newPalette);
        history("/");
    }

    function handlePNChange(e) {
        setNPName(paletteName = e.target.value);
    }

    function deleteDColorbox(name) {
        setColors(colors = colors.filter(color => color.name !== name));
    }

    function clearColors() {
        setColors([]);
    }

    function pickRandomColor() {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let a = 1;
        let color = `rgba(${r}, ${g}, ${b}, ${a})`;
        setColor(color);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <NewPaletteNav
                open={open}
                handleSubmit={handleSubmit}
                paletteName={paletteName}
                handlePNChange={handlePNChange}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                palettes={palettes}
            />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        display: "flex",
                        alignItems: "center"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <div className={classes.drawerContainer}>
                    <Typography variant="h5" gutterBottom>add a new color</Typography>
                    <div className={classes.drawerButtonContainer}>
                        <Button variant="contained" className={classes.drawerButton} color="secondary" onClick={clearColors}>
                            clear colors
                        </Button>
                        <Button variant="contained" className={classes.drawerButton} color="primary" onClick={pickRandomColor}>
                            random color
                        </Button>
                    </div>
                    <ColorPicker
                        colorPicked={colorPicked}
                        handleColorChange={handleColorChange}
                        addColor={addColor}
                        colorName={colorName}
                        handleNameChange={handleNameChange}
                        textClr={textClr}
                        colors={colors}
                    />
                </div>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <DraggableColorList
                    colors={colors}
                    deleteDColorbox={deleteDColorbox}
                />
            </Main>
        </Box>
    );
}

export default withStyles(styles, { withTheme: true })(NewPalette);
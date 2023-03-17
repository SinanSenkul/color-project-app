import React, { Component, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { styled, useTheme } from '@mui/material/styles';
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

const styles = {
    main: {
        display: "flex"
    }
}

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        height: `100vh`,
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function NewPalette(props) {
    const { classes, savePalette, palettes } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    var [colorPicked, setColor] = React.useState('blue');
    var [textClr, setTextColor] = React.useState('white');
    var [colors, setColors] = React.useState([]);
    var [colorName, setName] = React.useState('');
    var [paletteName, setNPName] = React.useState('');
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
            emoji: "🎨",
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
                classes={classes}
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
                <Typography variant="h4">create a new palette</Typography>
                <div className={classes.drawerButtonContainer}>
                    <Button variant="contained" color="secondary" onClick={clearColors}>clear colors</Button>
                    <Button variant="contained" color="primary" onClick={pickRandomColor}>random color</Button>
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
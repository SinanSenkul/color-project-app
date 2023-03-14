import React, { Component, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { textColor } from "./textColor";
import DColorbox from "./DColorbox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
    toolbar: {
        display: "flex",
        flexDirection: "row",
    },
    paletteNameForm: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "1rem",
    },
    paletteNameTextbox: {
        marginRight: "1rem"
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

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

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

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );

        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            colors.every(
                ({ color }) => color !== colorPicked
            )
        );
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    })

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

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar color="default" position="fixed" open={open}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={handleSubmit} className={classes.paletteNameForm}>
                        <TextValidator
                            value={paletteName}
                            name='paletteName'
                            onChange={handlePNChange}
                            validators={['required', 'isPaletteNameUnique',]}
                            errorMessages={['palette name can not be empty', 'palette name already in use']}
                            className={classes.paletteNameTextbox}
                        >
                            enter palette name
                        </TextValidator>
                        <Button variant="contained" color="primary" type="submit">save palette</Button>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
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
                    <Button variant="contained" color="secondary">clear palette</Button>
                    <Button variant="contained" color="primary">random color</Button>
                </div>
                <ChromePicker color={colorPicked} onChange={handleColorChange} />
                <ValidatorForm
                    onSubmit={addColor}
                >
                    <TextValidator
                        value={colorName}
                        name='colorName'
                        onChange={handleNameChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['name can not be empty', 'name already in use', 'color already in use']}
                    />
                    <Button
                        style={{ backgroundColor: colorPicked, color: textClr }}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        add color
                    </Button>
                </ValidatorForm>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {colors.map(color => <DColorbox key={color.name} color={color.color} name={color.name} deleteDColorbox={deleteDColorbox} />)}
            </Main>
        </Box>
    );
}

export default withStyles(styles, { withTheme: true })(NewPalette);
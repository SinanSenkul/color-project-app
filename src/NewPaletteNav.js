import React, { useEffect } from "react";
import { withStyles } from '@material-ui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";

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

function NewPaletteNav(props) {
    const { classes, open, handleSubmit, paletteName, handlePNChange,
        handleDrawerOpen, handleDrawerClose, palettes } = props;

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    })
    return (
        <div>
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
                            create a palette
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
                            <Link to="/">
                                <Button variant="contained" color="secondary">go back</Button>
                            </Link>
                        </ValidatorForm>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default withStyles(styles)(NewPaletteNav);
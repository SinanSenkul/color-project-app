import React, { useEffect } from "react";
import { withStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { styles, drawerWidth, AppBar } from './styles/NewPaletteNavStyles';
import PaletteSaveDialog from "./PaletteSaveDialog";

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
        <div className={classes.main}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar sx={{ alignItems: 'center' }} color="default" position="fixed" open={open}>
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
                    </Toolbar>
                    <div className={classes.navButtonsContainer}>
                            <PaletteSaveDialog
                                paletteName={paletteName}
                                handlePNChange={handlePNChange}
                                palettes={palettes}
                                handleSubmit={handleSubmit}
                            />
                        <Link to="/" className={classes.goBackLink}>
                            <Button className={classes.navButton} variant="contained" color="secondary">go back</Button>
                        </Link>
                    </div>
                </AppBar>
            </Box>
        </div>
    );
}

export default withStyles(styles)(NewPaletteNav);
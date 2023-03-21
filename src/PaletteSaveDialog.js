import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect } from "react";
import { withStyles } from '@material-ui/styles';
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { styles } from './styles/PaletteSaveDialogStyles';

function PaletteSaveDialog(props) {
    const { classes, paletteName, handlePNChange, palettes, handleSubmit } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    })

    return (
        <div className={classes.main}>
            <Button variant="contained" color="primary" onClick={handleClickOpen} className={classes.saveButton}>
                save palette
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>add palette</DialogTitle>
                <ValidatorForm onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            your palette name:
                        </DialogContentText>
                        <TextValidator
                            value={paletteName}
                            placeholder="palette name"
                            name='paletteName'
                            variant="filled"
                            onChange={handlePNChange}
                            validators={['required', 'isPaletteNameUnique',]}
                            errorMessages={['palette name can not be empty', 'palette name already in use']}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>cancel</Button>
                        <Button type="submit">save palette</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div >
    );
}

export default withStyles(styles)(PaletteSaveDialog);
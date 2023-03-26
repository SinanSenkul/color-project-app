import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import React from "react";
import { withStyles } from '@material-ui/styles';
import { Button } from "@mui/material";
import { ValidatorForm } from "react-material-ui-form-validator";
import {styles} from "./styles/PaletteRemoveDialogStyles";

function PaletteRemoveDialog(props) {
    const { classes, handleRemove } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <i className="material-icons" onClick={handleClickOpen}>delete</i>
            <Dialog open={open} onClose={handleClose}>
                <ValidatorForm onSubmit={handleRemove} className={classes.form}>
                    <DialogContent>
                        <DialogContentText>
                            remove this palette?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">remove</Button>
                        <Button onClick={handleClose} color="secondary">cancel</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div >
    );
}

export default withStyles(styles)(PaletteRemoveDialog);
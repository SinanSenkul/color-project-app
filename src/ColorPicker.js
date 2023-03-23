import React, { useEffect } from "react";
import { withStyles } from '@material-ui/styles';
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
    main: {

    },
    chromePicker: {
        width: "18rem !important",
        marginTop: "1rem",
    },
    addColorButton: {
        width: "100%",
        height: "3rem",
        padding: "1rem",
        marginTop: "0.5rem !important",
        fontSize: "1rem !important"
    },
    textInput: {
        width: "100%",
        marginTop: "0.5rem !important",
    }
}

function ColorPicker(props) {
    const { classes, colorPicked, handleColorChange, addColor,
        colorName, handleNameChange, textClr, colors } = props;

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
    })

    return (
        <div className={classes.main}>
            <ChromePicker className={classes.chromePicker} color={colorPicked} onChange={handleColorChange} />
            <ValidatorForm
                onSubmit={addColor}
            >
                <TextValidator
                    value={colorName}
                    className={classes.textInput}
                    placeholder="color name"
                    name='colorName'
                    variant="filled"
                    onChange={handleNameChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['name can not be empty', 'name already in use', 'color already in use']}
                />
                <Button
                    style={{ backgroundColor: colorPicked, color: textClr }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={colors.length >= 20}
                    className={classes.addColorButton}
                >
                    {colors.length >= 20 ? 'palette full' : 'add color'}
                </Button>
            </ValidatorForm>
        </div>
    );
}

export default withStyles(styles)(ColorPicker);
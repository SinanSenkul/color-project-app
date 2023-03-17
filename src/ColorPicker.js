import React, { useEffect } from "react";
import { withStyles } from '@material-ui/styles';
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {

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
        <div>
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
                    disabled={colors.length >= 5}
                >
                    {colors.length >= 5 ? 'palette full' : 'add color'}
                </Button>
            </ValidatorForm>
        </div>
    );
}

export default withStyles(styles)(ColorPicker);
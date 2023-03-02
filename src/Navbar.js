import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import './Navbar.css';
import { Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    handleFormatChange(e) {
        this.setState({
            format: e.target.value,
            open: true
        })
        this.props.changeFormat(e.target.value)
    }

    closeSnackbar() {
        this.setState({
            open: false
        })
    }
    render() {
        let level = this.props.level;
        let format = this.state.format;
        let updateLevel = this.props.updateLevel;
        let open = this.state.open;
        return (
            <nav className="navbar-main">
                <div className="logo-container">
                    <Link className="logo" to="/">color-app</Link>
                </div>
                <div className="text-container">
                    <span className="span">
                        level{level}
                    </span>
                </div>
                <div className="slider-container">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={updateLevel}
                    />
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">hex</MenuItem>
                        <MenuItem value="rgb">rgb</MenuItem>
                        <MenuItem value="rgba">rgba</MenuItem>
                    </Select>
                </div>
                <div className="snackbar-container">
                    <Snackbar className="snackbar"
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={open}
                        autoHideDuration={2000}
                        message={<h4 className="snackbar-message">format changed to {format}</h4>}
                        ContentProps={{
                            "aria-describedby": "snackbar-message"
                        }}
                        onClose={this.closeSnackbar}
                        action={[
                            <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        ]}
                    >
                    </Snackbar>
                </div>
            </nav>
        );
    }

}

export default Navbar;
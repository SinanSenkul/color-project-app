import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import 'rc-slider/assets/index.css';
import Slider from "rc-slider";
import './Navbar.css';
import { Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }
    handleFormatChange(e) {
        this.setState({
            format: e.target.value
        })
        this.props.changeFormat(e.target.value)
    }
    render() {
        return (
            <nav className="navbar-main">
                <div className="logo-container">
                    <a className="logo" href="#">color-app</a>
                </div>
                <div className="text-container">
                    <span className="span">
                        level{this.props.level}
                    </span>
                </div>
                <div className="slider-container">
                    <Slider
                        defaultValue={this.props.level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={this.props.updateLevel}
                    />
                </div>
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">hex</MenuItem>
                        <MenuItem value="rgb">rgb</MenuItem>
                        <MenuItem value="rgba">rgba</MenuItem>
                    </Select>
                </div>
            </nav>
        );
    }

}

export default Navbar;
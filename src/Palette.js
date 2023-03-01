import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Colorbox from "./Colorbox";
import 'rc-slider/assets/index.css';
import './Palette.css';
import Slider from "rc-slider";
import Navbar from "./Navbar";

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 600,
            format: "hex"
        }
        this.updateLevel = this.updateLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    updateLevel(newLevel) {
        this.setState({
            level: newLevel
        })
    }
    changeFormat(val) {
        this.setState({
            format: val
        })
    }
    render() {
        let level = this.state.level;
        let format = this.state.format;
        return (
            <div className="palette-main">
                <Navbar level={level} updateLevel={this.updateLevel} changeFormat={this.changeFormat} />
                <div className="colorbox-container">
                    {this.props.palette.colors[level].map(color =>
                        <Colorbox background={color[format]} name={color.name} />
                    )}
                </div>
                {/* footer here */}
            </div>
        );
    }

}

export default Palette;
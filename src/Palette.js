import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Colorbox from "./Colorbox";
import './Palette.css';
import { generatePalette } from "./colorHelpers";
import seedPalettes from "./seedPalettes";

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        console.log(generatePalette(seedPalettes[1]));
        return (
            <div className="palette-main">
                {/* navbar here */}
                <div className="colorbox-container">
                    {this.props.palette.colors.map(color =>
                        <Colorbox background={color.color} name={color.name} />
                    )}
                </div>
                {/* footer here */}
            </div>
        );
    }

}

export default Palette;
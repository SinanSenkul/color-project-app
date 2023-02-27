import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Colorbox from "./Colorbox";
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
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
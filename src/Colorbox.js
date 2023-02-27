import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Colorbox.css';

class Colorbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <div style={{background: this.props.background}} className="colorbox">
                <span>{this.props.name}</span>
                <span>MORE</span>
            </div>
        );
    }

}

export default Colorbox;
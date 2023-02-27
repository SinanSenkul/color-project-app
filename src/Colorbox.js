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
        const { background, name } = this.props;
        return (
            <div style={{ background }} className="colorbox-main">
                <div className="copy-container">
                    <div className="colorbox">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">copy</button>
                </div>
                <span className="more-span">more</span>
            </div>
        );
    }

}

export default Colorbox;
import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Colorbox.css';
import { CopyToClipboard } from "react-copy-to-clipboard";

class Colorbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }
    render() {
        const { background, name } = this.props;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="colorbox-main">
                    <div style={{ background }} className={`copy-overlay ${this.state.copied && "show"}`}></div>
                    <div className={`copy-message ${this.state.copied && "show"}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="colorbox">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">copy</button>
                    </div>
                    <span className="more-span">more</span>
                </div>
            </CopyToClipboard>
        );
    }

}

export default Colorbox;
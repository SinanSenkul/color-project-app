import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Colorbox.css';
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { color } from "@mui/system";
import { textColor } from "./textColor";

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
        const { background, name, key, colorId, paletteId, showLink } = this.props;
        let color = textColor(background);
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="colorbox-main">
                    <div style={{ background }} className={`copy-overlay ${this.state.copied && "show"}`}></div>
                    <div className={`copy-message ${this.state.copied && "show"}`}>
                        <h1 style={{ color: color }}>copied!</h1>
                        <p style={{ color: color }}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="colorbox">
                            <span style={{ color: color }}>{name.toLowerCase()}</span>
                        </div>
                        <button style={{ color: color }} className="copy-button">click on to copy</button>
                    </div>
                    {showLink &&
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                            <span className="more-span" style={{ color: color }}>
                                more
                            </span>
                        </Link>
                    }
                </div>
            </CopyToClipboard>
        );
    }

}

export default Colorbox;
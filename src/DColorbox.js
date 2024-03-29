import React from "react";
import { withStyles } from '@material-ui/styles';
import { textColor } from "./textColor";
import { styles } from './styles/DColorboxStyles';

function DColorbox(props) {
    const { classes, color, name, deleteDColorbox } = props;
    function handleDelete() {
        deleteDColorbox(name);
    }
    var tColor = textColor(color);
    return (
        <div style={{ backgroundColor: color }} className={classes.main}>
            <div className={classes.boxContent}>
                <span style={{ color: tColor }}>
                    {name}
                </span>
                <div style={{ color: tColor }}>
                    <i className="material-icons" onClick={handleDelete}>delete</i>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(DColorbox);
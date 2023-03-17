import React, { Component, useState } from "react";
import DColorbox from "./DColorbox";

function DraggableColorList(props) {
    const { colors, deleteDColorbox } = props;
    return (
        <div style={{ height: '100%' }}>
            {colors.map((color) =>
                <DColorbox
                    key={color.name}
                    color={color.color}
                    name={color.name}
                    deleteDColorbox={deleteDColorbox}
                />)
            }
        </div>
    );
}

export default DraggableColorList;
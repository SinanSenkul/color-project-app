import React, { Component, useState } from "react";
import { SortableContainer } from "react-sortable-hoc";
import DColorbox from "./DColorbox";

const DraggableColorList = ({ colors, deleteDColorbox }) => {

    return (
        <div style={{ height: '100%' }}>
            {colors.map((color, i) =>
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
import React, { Component, useState } from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { Route, Routes } from 'react-router-dom';
import PaletteList from "./PaletteList";
import Shade from "./Shade";
import NewPalette from "./NewPalette";

function App() {
  var [palettes, setPalettes] = React.useState(seedPalettes);
  function savePalette(newPalette) {
    let newPalettes = palettes;
    newPalettes.push(newPalette);
    setPalettes(newPalettes);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList palettes={palettes} />}></Route>
        <Route path="/palette/:id" element={<Palette palettes={palettes} />}></Route>
        <Route path="/palette/:paletteId/:colorId" element={<Shade />}></Route>
        <Route path="/palette/new" element={<NewPalette savePalette={savePalette} palettes={palettes} />}></Route>
      </Routes>
    </div >
  );
}

export default App;
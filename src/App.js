import React, { Component, useState } from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { Route, Routes } from 'react-router-dom';
import PaletteList from "./PaletteList";
import Shade from "./Shade";
import NewPalette from "./NewPalette";

function App() {
  const storedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
  var [palettes, setPalettes] = React.useState(storedPalettes || seedPalettes);

  function syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }

  function savePalette(newPalette) {
    let newPalettes = palettes;
    newPalettes.push(newPalette);
    setPalettes(newPalettes);
    syncLocalStorage();
  }

  function removePalette(id) {
    setPalettes(palettes = palettes.filter(palette => palette.id !== id));
    syncLocalStorage();
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList palettes={palettes} removePalette={removePalette} />}></Route>
        <Route path="/palette/:id" element={<Palette palettes={palettes} />}></Route>
        <Route path="/palette/:paletteId/:colorId" element={<Shade palettes={palettes} />}></Route>
        <Route path="/palette/new" element={<NewPalette savePalette={savePalette} palettes={palettes} />}></Route>
      </Routes>
    </div >
  );
}

export default App;
import React, { Component, useState } from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { useLocation, Route, Routes } from 'react-router-dom';
import PaletteList from "./PaletteList";
import Shade from "./Shade";
import NewPalette from "./NewPalette";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';

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

  const location = useLocation();

  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes>
            <Route
              path="/"
              element={<div className="page"><PaletteList palettes={palettes} removePalette={removePalette} /></div>}>
            </Route>
            <Route
              path="/palette/:id"
              element={<div className="page"><Palette palettes={palettes} /></div>}>
            </Route>
            <Route
              path="/palette/:paletteId/:colorId"
              element={<div className="page"><Shade palettes={palettes} /></div>}>
            </Route>
            <Route
              path="/palette/new"
              element={<div className="page"><NewPalette savePalette={savePalette} palettes={palettes} /></div>}>
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App;
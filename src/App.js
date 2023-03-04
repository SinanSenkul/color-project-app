import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { Route, Routes } from 'react-router-dom';
import PaletteList from "./PaletteList";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList seedPalettes={seedPalettes} />}></Route>
        <Route path="/palette/:id" element={<Palette />}></Route>
        <Route path="/palette/:paletteId/:colorId" element={{ /* shades component here */ }}></Route>
      </Routes>
    </div >
  );
}

export default App;
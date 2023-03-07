import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { Route, Routes } from 'react-router-dom';
import PaletteList from "./PaletteList";
import Shade from "./Shade";
import NewPalette from "./NewPalette";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList seedPalettes={seedPalettes} />}></Route>
        <Route path="/palette/:id" element={<Palette />}></Route>
        <Route path="/palette/:paletteId/:colorId" element={<Shade />}></Route>
        <Route path="/palette/new" element={<NewPalette />}></Route>
      </Routes>
    </div >
  );
}

export default App;
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedPalettes[1])} />
    </div>
  );
}

export default App;

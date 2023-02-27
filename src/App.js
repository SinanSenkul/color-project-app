import Palette from "./Palette";
import seedPalettes from "./seedPalettes";

function App() {
  return (
    <div className="App">
      <Palette palette={seedPalettes[2]} />
    </div>
  );
}

export default App;

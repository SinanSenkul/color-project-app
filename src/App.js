import Palette from "./Palette";
import seedPalettes from "./seedPalettes";

function App() {
  return (
    <div className="App">
      <Palette palette={seedPalettes[0]} />
    </div>
  );
}

export default App;

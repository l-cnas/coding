import './App.css';
import Bebras from './components/01/Bebras';
import Barsukas from "./components/01/Barsukas";
import Zuikis from './components/ND/Zuikis';
import Tekstas from './components/ND/Tekstas';
import ZebraiBebrai from './components/ND/ZebraiBebrai';
import DuTekstai from './components/ND/DuTekstai';
import TrysProps from './components/ND/TrysProps';

function App() {

  return (
    <div className="App">
      <h1>Mano <br /> React</h1>

      <Bebras />
      <Barsukas />

      <Zuikis />

      <Tekstas text="Sveikas pasauli" />

      <ZebraiBebrai variant={1} />
      <ZebraiBebrai variant={2} />

      <DuTekstai h1="Pirmas tekstas" h2="Antras tekstas" />

      <TrysProps h1="Vienas" h2="Du" color="green" />
    </div>
  );

}

export default App;
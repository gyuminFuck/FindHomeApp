import logo from "./logo.svg";
import "./App.css";
import InputDataScreen from "./screens/InputDataScreen.js";
import AppBarScreen from "./screens/AppBarScreen.js";
function App() {
  return (
    <div className="App">
      <AppBarScreen />
      <header className="App-header">
        <InputDataScreen />
      </header>
    </div>
  );
}

export default App;

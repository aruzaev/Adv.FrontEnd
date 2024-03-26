import logo from "./logo.svg";
import "./App.css";
import Animal from "./components/Animal";
import Animals from "./components/Animals";
import Family from "./components/Family";

function App() {
  return (
    <div className="App">
      <Animals>
        <Family title="Feline">
          <Animal animal="Tabby" count={300} />
          <Animal animal="Tiger" count={300} />
        </Family>
        <Family title="Canine">
          <Animal animal="Dog" count={300} />
          <Animal animal="Wolf" count={300} />
        </Family>
      </Animals>
    </div>
  );
}

export default App;

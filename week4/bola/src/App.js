import logo from "./logo.svg";
import "./App.css";
import Monday from "./Monday";
import Greet from "./Greet";
import Calculator from "./Calculator";
import Car from "./Car";

function App() {
  return (
    <div className= "App">
      <h1>Week 4 - JSX React Component</h1>
      <Greet firstName={"Artem"}/>
      <Monday />
      <Calculator num1={5} num2={7000}/>
      <Car />
    </div>
  );
}

export default App;

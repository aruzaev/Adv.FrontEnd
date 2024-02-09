import logo from './logo.svg';
import './App.css';
import CounterApp from './screens/CounterApp';
import ToDoApp from './screens/TodoApp';

function App() {
  return (
    <div className="App">
      <CounterApp />
      <ToDoApp />
    </div>
  );
}

export default App;

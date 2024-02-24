import logo from './logo.svg';
import './App.css';
import UncontrolledCompo from './screens/UncontrolledCompo';
import ControlledCompo from './screens/ControlComponent';
import FormValidate from './screens/FormValidate';

function App() {
  return (
    <div className="App">
      <UncontrolledCompo />
      <ControlledCompo />
      <FormValidate />
    </div>
  );
}

export default App;

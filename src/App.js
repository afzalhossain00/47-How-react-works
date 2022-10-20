import logo from './logo.svg';
import './App.css';
import Device from './component/Device/Device';
import Watch from './component/Watch/Watch';
import Tablet from './component/Tablet/Tablet';

function App() {
  return (
    <div className="App">
      <Device name="MyPhone" price="15000"></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  );
}

export default App;

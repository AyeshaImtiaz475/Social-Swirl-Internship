import logo from './logo.svg';
import './App.css';
import Info from './components/Info';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Info />
      </header>
    </div>
  );
}

export default App;

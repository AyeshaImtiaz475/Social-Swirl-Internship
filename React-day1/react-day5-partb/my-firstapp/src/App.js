import logo from './logo.svg';
import './App.css';
import Facts from './components/Facts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ReactFacts</p>
         <ul>
          <li>React Course</li>
          <li>Project-1</li>
          <li>Learning</li>
         </ul>
      </header>
      <Facts />
    </div>
  );
}

export default App;

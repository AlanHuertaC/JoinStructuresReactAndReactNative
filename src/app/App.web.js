import logo from './logo.svg';
import './App.web.css';
import { OperationsComponent } from '../components/Operations';

export function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alan Huerta Cortes
        </a>
      </header>*/}
      <OperationsComponent numbers={numbers} />
    </div>
  );
}

export default App;

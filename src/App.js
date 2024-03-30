import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          In the name of Allah.
          March 28, 2024.Wednesday.
          Have a nice day today.
          <br>
          <a href="https://www.researchgate.net/profile/Sadaf-Habib">Dr. Sadaf Habib</a>
          </br>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

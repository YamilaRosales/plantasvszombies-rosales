import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Plantas vs Zombies - Cursos para el cuidado de tus plantas de interior
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingresá y que tu potus deje de ser un zombie!
        </a>
      </header>
    </div>
  );
}

export default App;

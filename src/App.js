import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button
          onClick={handleClick}
          className="App-button"
          aria-label="Click the button"
        >
          Click Me
        </button>
      </header>
    </div>
  );
};

export default App;

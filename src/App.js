import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/samxn/dictionary-react" target="_blank">
            Open-source code
          </a>{" "}
          by Samin Dizna
        </footer>
      </div>
    </div>
  );
}

export default App;

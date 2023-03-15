import "./App.css";
import PDF from "./Oblikovanje_Osvrt_1.pdf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Link na predavanja</p>
        <a
          className="App-link"
          href={PDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Predavanje_01
        </a>
      </header>
    </div>
  );
}

export default App;

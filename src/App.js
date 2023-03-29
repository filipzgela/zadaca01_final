import "./App.css";
import PDF_1 from "./Oblikovanje_Osvrt_1.pdf";
import PDF_2 from "./Oblikovanje_Osvrt_2.pdf";
import ZIP_1 from "./vjezba1";

function App() {
  const zipFileUrl = "https://file.io/0OqysamryCed";

  return (
    <div className="App">
      <header className="App-header">
        <p>Link na predavanja</p>
        <a
          className="App-link"
          href={PDF_1}
          target="_blank"
          rel="noopener noreferrer"
        >
          Predavanje_01
        </a>
        <a
          className="App-link"
          href={PDF_2}
          target="_blank"
          rel="noopener noreferrer"
        >
          Predavanje_02
        </a>
        <a className="App-link" target="_blank" href={ZIP_1} download={ZIP_1}>
          Predavanje_03
        </a>
      </header>
    </div>
  );
}

export default App;

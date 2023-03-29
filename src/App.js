import "./App.css";
import PDF_1 from "./Oblikovanje_Osvrt_1.pdf";
import PDF_2 from "./Oblikovanje_Osvrt_2.pdf";
import ZIP_1 from 

function App() {

  const zipFileUrl = "https://file.io/E9L6aOzsarVI";
  
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
        <a href={zipFileUrl} download="vjezba1.zip">
          Predavanje_03
        </a>
      </header>
    </div>
  );
}

export default App;

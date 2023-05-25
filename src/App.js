import "./App.css";
import PDF_1 from "./Oblikovanje_Osvrt_1.pdf";
import PDF_2 from "./Oblikovanje_Osvrt_2.pdf";

function App() {

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
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Vjezba_1.html"
        >
          Vjezba1
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Vjezba_2.html"
        >
          Vjezba2
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Vjezba_3.html"
        >
          Vjezba3
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Vjezba_4.html"
        >
          Vjezba4
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Zadaca.html"
        >
          Zadaca
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Vjezba5.html"
        >
          Vjezba5
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Zadaca_2.html"
        >
          Zadaca2
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="HTML_tablica.html"
        >
          HTML_tablica
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="HTML_tablica_CSS.html"
        >
          HTML_tablica_CSS
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="Zadaca_3.html"
        >
          Zadaca_3
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="javaskripta/vjezba_6.html"
        >
          Vjezba6
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="javaskripta/Zadaca_4.html"
        >
          Zadaca_4
        </a>
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="javaskripta/Zadaca5.html"
        >
          Zadaca_5
        </a>
      </header>
    </div>
  );
}

export default App;

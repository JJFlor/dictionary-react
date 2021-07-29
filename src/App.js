import logo from './logo.png';
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
         <main>
           <Dictionary defaultKeyWord="coding" />
         </main>
        </header>
        <footer className="App-footer">
            This site is <a href="https://github.com/JJFlor/dictionary-react" alt="Julia's GitHub Repository" rel="noreferrer" target="_blank">
              Open-source
            </a> and was coded by <a href="https://www.linkedin.com/in/juliajaile/" alt="Julia's Linkedin" rel="noreferrer" target="_blank">
              Júlia Jaile Flores
            </a>
            , hosted on <a href="https://dicitionary-react-app-9077f4.netlify.app" alt="Julia's Netlify account" rel="noreferrer" target="_blank">Netlify</a> 👩🏽‍💻  
        </footer>
      </div>
    </div>
  );
}



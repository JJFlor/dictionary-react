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
           <Dictionary />
         </main>
        </header>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/JJFlor/dictionary-react" rel="noreferrer" target="_blank">
              Open-source code
            </a>  by   <a href="https://www.linkedin.com/in/juliajaile/" rel="noreferrer" target="_blank">
              Júlia Jaile Flores
            </a>
            , hosted on <a href="https://dicitionary-react-app-9077f4.netlify.app" rel="noreferrer" target="_blank">Netlify</a> 👩🏽‍💻
          </small>  
        </footer>
      </div>
    </div>
  );
}



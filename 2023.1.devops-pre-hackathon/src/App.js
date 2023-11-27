import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isMainPageVisible, setIsMainPageVisible] = useState(false);

  const handlePlay = () => {
    setIsMainPageVisible(true);
    const audio = new Audio(`${process.env.PUBLIC_URL}/music/hdst16.mp3`);
    audio.play();
    audio.loop = true;
  }

  return (
    isMainPageVisible ? (
      <div className="App">
        <header className="App-header">
          <div className="App-Logo-Ctr">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p>
            DevOps Básico IT Talent - Atividade CI/CD 1
          </p>
          <p>
            <b>Discente</b>: Gabriel Lins
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn DevOps
          </a>
        </header>
      </div>
    ) : (
        <button className='animated-button6' onClick={handlePlay}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Clique aqui
        </button>
    )
  );
}

export default App;

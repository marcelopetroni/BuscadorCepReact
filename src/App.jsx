import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles.css';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');

  async function handleSearch() {
    if(input == '') {
      return;
    }
    else {
      try {
        const response = await api.get(`${input}/json`);
      }
      catch {
        alert("Cep Inválido.");
      }
    }
  }
  return (
    <> {/* esses <></> são fragmentos que permite mais de um elemento HTML a ser inserido*/}
      <div className="container">
        <h1 className='title'>Buscador CEP</h1>

        <div className="containerInput">
          <input type="text" 
          className="search"
          placeholder='Digite seu cep...' 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          />
          
          <button className="lupa" onClick={handleSearch()}>
          <FiSearch
            className='botao'
            size = {25}
            color = "#FFF"
          />
      
          </button>
        </div>

        <main className="main">
          <h2 className='info'>Cep:</h2>
          <span className='info'>Cidade: </span>
          <span className='info'>Rua: </span>
          <span className='info'>Complemento: </span>
          <span className='info'>Bairro: </span>
        </main>

      </div>

    </>
  )
}

export default App;

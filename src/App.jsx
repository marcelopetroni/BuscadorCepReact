import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles.css';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');
  
  async function handleSearch() {
    if(input == '') {
      alert("Cep não informado.");
      return;
    }
    else {
      try {
        const response = await api.get(`${input}/json`);
        setCep(response.data);
        setInput("");
      }
      catch {
          alert("Cep Inválido.");
          setInput(""); // isso é para limpar o campo para facilitar a reescrita do usuário dado a incoerência.
      }
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

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
          onKeyUp={handleKeyPress}
          />
          
          {/* OnChange define a função que guarda no evento input as infos escritas no campo de formulário*/}
          {/* onKeyUp adiciona a possbilidade de chamar a função princpal ao apertar um botão que no exemplo
          a função handleKeyPress define como enter*/}
          
          <button className="lupa" onClick={handleSearch}> 
          {/* CUIDADO QUE NO ON CLICK NÃO BOTE A FUNÇÃO COM () APENAS SUA REFERÊNCIA, SE NÃO, NÃO FUNCIONA*/}
          <FiSearch
            className='botao'
            size = {25}
            color = "#FFF"
          />
      
          </button>
        </div>

        {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2 className='info'>Cep: {cep.cep}</h2>
          <span className='info'>Cidade: {cep.localidade} - {cep.uf} </span>
          <span className='info'>Rua: {cep.logradouro} </span>
          <span className='info'>Bairro: {cep.bairro}</span>
          <span className='info'>Complemento: {cep.complemento} </span>
        </main>
        )}
      </div>

    </>
  )
}

export default App;

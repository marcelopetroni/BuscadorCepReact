import { useEffect, useState } from 'react';
import './styles.css';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');
  
  async function handleSearch(e) {
    e.preventDefault();
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

  return (
    <> {/* esses <></> são fragmentos que permite mais de um elemento HTML a ser inserido*/}
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
      <div className="container">
        <h1 className='title'>Buscador CEP</h1>
        <form onSubmit={handleSearch}>
          <div className="containerInput">
            <input type="text" 
            className="search"
            placeholder='Digite seu cep...' 
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            />
            
            {/* OnChange define a função que guarda no evento input as infos escritas no campo de formulário*/}
            {/* onKeyUp adiciona a possibilidade de chamar a função principal ao apertar um botão que no exemplo
            a função handleKeyPress define como enter*/}
            
            <button type="submit" className="lupa" onClick={handleSearch}> 
            {/* CUIDADO QUE NO ON CLICK NÃO BOTE A FUNÇÃO COM () APENAS SUA REFERÊNCIA, SE NÃO, NÃO FUNCIONA*/}
            <FiSearch
              className='botao'
              size = {25}
              color = "#FFF"
            />
        
            </button>
          </div>
          </form>

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

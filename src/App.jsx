import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import { FiSearch } from 'react-icons/fi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* esses <></> são fragmentos que permite mais de um elemento HTML a ser inserido*/}
      <div className="container">
        <h1 className='title'>Buscador CEP</h1>

        <div className="containerInput">
          <input type="text" 
          className="search"
          placeholder='Digite seu cep...' 
          />
          
          <button className="lupa">
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

export default App

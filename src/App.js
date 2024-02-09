import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./style.css";
import api from "./services/api"; 
function App() {

    const [input, setInput] = useState('')

   async function handleSearch(){
      //01001000/json/ cep escolhido de exemplo
      if(input === ''){
        alert("Digite um CEP")
        return;
      }

      try{
          const response = await api.get(`${input}/json/`);
          console.log(response.data)
      }catch{
        alert("Ops, Cep não encontrado!!!")
        setInput("")
      }
    }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className=" containerInput">
        <input type="text" placeholder="Digite seu CEP:" 
        value={input}
        onChange={(e) => setInput(e.target.value) }/>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 88807-155</h2>
        <span>Rua teste algum</span>
        <span>Complemento: Alguma coisa</span>
        <span>Vila Azul</span>
        <span>Criciuma SC</span>
      </main>
    </div>
  );
}

export default App;

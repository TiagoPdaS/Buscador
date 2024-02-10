import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./style.css";
import api from "./services/api";
function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    //01001000/json/ cep escolhido de exemplo
    if (input === "") {
      alert("Digite um CEP");
      return;
    }

    try {
      const response = await api.get(`${input}/json/`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops, Cep não encontrado!!!");
      setInput("");
    }
  }

  return (
    <div className="container">
      <div className="box">
      <h1 className="title">CEP BRASIL</h1>

      <div className=" containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP:"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={40} color="black"/>
        </button>

      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento:{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade}-{cep.uf}
          </span>
        </main>
      )}
    </div>
    </div>
  );
}

export default App;

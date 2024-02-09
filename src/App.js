import { FiSearch } from "react-icons/fi";
import'./style.css';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className=" containerInput">
        <input type="text" placeholder="Digite seu CEP:" />

        <button className="buttonSearch">
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

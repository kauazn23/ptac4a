import { useState } from "react";
import "./App.css";

function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function aoAdicionar(event) {
    event.preventDefault();

    if (novaIdeia.trim() === "") {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    }

    const ideia = {
      id: Date.now(),
      texto: novaIdeia,
      feita: false
    };

    setIdeias([...ideias, ideia]);
    setNovaIdeia("");
    setErro("");
  }

  function aoDigitar(event) {
    setNovaIdeia(event.target.value);
    setErro("");
  }

  return (
    <main>
      <h1>Painel de Ideias</h1>
      <p>Registre, acompanhe e conclua suas ideias.</p>

      <form onSubmit={aoAdicionar}>
        <input
          type="text"
          placeholder="Digite uma nova ideia..."
          value={novaIdeia}
          onChange={aoDigitar}
        />

        <button type="submit">
          Adicionar
        </button>
      </form>

      {erro && <p>{erro}</p>}

      <section>
        <h2>Minhas ideias</h2>

        {ideias.map((ideia) => (
          <div key={ideia.id}>
            <p>{ideia.texto}</p>
          </div>
        ))}
      </section>

      <footer>
        <p>{ideias.length} ideias no painel · 0 concluídas</p>
      </footer>
    </main>
  );
}

export default App;
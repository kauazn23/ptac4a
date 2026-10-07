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
    setNovaIdeia(event.target.value)
    setErro("")
  }

  function aoConcluir(id) {
  setIdeias(
    ideias.map((ideia) =>
      ideia.id === id
        ? { ...ideia, feita: !ideia.feita }
        : ideia
    )
  )
}

function aoRemover(id) {
  setIdeias(ideias.filter((ideia) => ideia.id !== id));
}

const concluidas = ideias.filter((ideia) => ideia.feita).length;

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
        {ideias.map((ideia) => (
  <div key={ideia.id}>
    <input
      type="checkbox"
      checked={ideia.feita}
      onChange={() => aoConcluir(ideia.id)}/>

    <p className={ideia.feita ? "concluida" : ""}>
      {ideia.texto}
    </p>

    <button
      type="button"
      onClick={() => aoRemover(ideia.id)}
    >
      X
    </button>
  </div>
))}
      </section>

      <footer>
        <p>
        {ideias.length} ideias no painel · {concluidas} concluídas
        </p>
      </footer>
    </main>
  );
}

export default App;
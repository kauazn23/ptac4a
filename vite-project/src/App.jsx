import "./App.css";

function App(){
  return(
    <main>
      <h1>Painel de Ideias</h1>
      <p>Registre, Acompanhe e conclua suas ideias</p>

      <form>
        <input type="text" placeholder="Digite sua nova ideia..." />

      <button type="submit">Adicionar</button>
      </form>

      <section>
        <h2>Minhas ideias</h2>
      </section>

      <footer>
        <p>0 ideias no painel - 0 concluidas</p>
      </footer>
    </main>
  )
}

export default App
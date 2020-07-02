import React, {useState , useEffect} from "react";
import api from './services/api';
import "./styles.css";

function App() {

  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositorios(response.data);
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: "RepoDino",
      url: "ok",
      techs: ['vue', 'react']
    })

    const newRepo = response.data;
    setRepositorios([...repositorios, newRepo])

  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`)
    const repoFiltered = repositorios.filter(repo => repo.id !== id )

    setRepositorios(repoFiltered)
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {
          repositorios.map(repo =>
            <li key={repo.id}>
            <a href={repo.url}>{repo.title}</a>
            Likes ({repo.likes})
            <button onClick={() => handleRemoveRepository(repo.id)}>
                Remover
            </button>
            </li>)
        }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;

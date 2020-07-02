const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repositorio = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repositorio);
  return response.json(repositorio);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params
  const { title, url, techs } = request.body

  const indexRepositorio = repositories.findIndex(item => item.id === id);

  if (indexRepositorio > -1) {
    repositories[indexRepositorio].title = title;
    repositories[indexRepositorio].url = url;
    repositories[indexRepositorio].techs = techs;
    return response.json(repositories[indexRepositorio])
  }
  else {
    return response.status(400).json({ message: "Repositório não encontrado" });
  }
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params
  const indexRepositorio = repositories.findIndex(item => item.id === id)

  if (indexRepositorio > -1) {
    repositories.splice(indexRepositorio,1);
    return response.json({ message: "Deletado com sucesso" });
  }
  else {
    return response.status(400).json({ message: "Repositório não encontrado" });
  }

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params
  const indexRepositorio = repositories.findIndex(item => item.id === id)

  if (indexRepositorio > -1) {
    repositories[indexRepositorio].likes += 1;
    return response.json(repositories[indexRepositorio]);
  }
  else {
    return response.status(400).json({ message: "Repositório não encontrado" });
  }
});

module.exports = app;

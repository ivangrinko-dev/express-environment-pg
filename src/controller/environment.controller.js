const express = require(`express`);
const {
  getAllEnvironment,
  getAllEnvironmentById,
  createEnvironment,
  updateEnvironmentById,
  deleteEnvironmentById,
} = require(`../service/environment.servise`);
const route = express.Router();

route.get(`/`, async (req, res) => {
  const data = await getAllEnvironment();
  res.send(data);
});

route.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  const data = await getAllEnvironmentById(id);
  res.send(data);
});

route.post(`/`, async (req, res) => {
  const { label, category, priority } = req.body;
  const data = await createEnvironment(label, category, priority);
  res.send(data);
});

route.put(`/:id`, async (req, res) => {
  const { id } = req.params;
  const { label, category, priority } = req.body;
  const dada = await updateEnvironmentById(id, label, category, priority);
  res.send(dada);
});

route.delete(`/:id`, async (req, res) => {
  const { id } = req.params;
  const dada = await deleteEnvironmentById(id);
  res.send(dada);
});

module.exports = route;

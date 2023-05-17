const express = require(`express`);
const { isValidEnvironmentId, isValidEnvironmentBody } = require(`../helper/validation`);
const { bildResponse } = require(`../helper/bildresponse`);
const {
  getAllEnvironment,
  getAllEnvironmentById,
  createEnvironment,
  updateEnvironmentById,
  deleteEnvironmentById,
} = require(`../service/environment.servise`);
const route = express.Router();

route.get(`/`, async (req, res) => {
  try {
    const data = await getAllEnvironment();
    bildResponse(res, 200, data);
  } catch (error) {
    bildResponse(res, 404, error.message);
  }
});

route.get(`/:id`, isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getAllEnvironmentById(id);
    bildResponse(res, 200, data);
  } catch (error) {
    bildResponse(res, 404, error.message);
  }
});

route.post(`/`, isValidEnvironmentBody, async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnvironment(label, category, priority);
    bildResponse(res, 200, data);
  } catch (error) {
    bildResponse(res, 404, error.message);
  }
});

route.put(`/:id`, isValidEnvironmentId, isValidEnvironmentBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnvironmentById(id, label, category, priority);
    bildResponse(res, 200, data);
  } catch (error) {
    bildResponse(res, 404, error.message);
  }
});

route.delete(`/:id`, isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteEnvironmentById(id);
    bildResponse(res, 200, data);
  } catch (error) {
    bildResponse(res, 404, error.message);
  }
});

module.exports = route;

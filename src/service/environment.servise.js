const {
  getAllEnvironmentDb,
  getAllEnvironmentByIdDb,
  createEnvironmentDb,
  updateEnvironmentByIdDb,
  deleteEnvironmentByIdDb,
} = require(`../repository/environment.repositpry`);

async function getAllEnvironment() {
  const data = await getAllEnvironmentDb();
  if (data.length == 0) throw new Error(`массив data пустой`);
  return data;
}

async function getAllEnvironmentById(id) {
  const data = await getAllEnvironmentByIdDb(id);
  if (data.length == 0) throw new Error(`Такого id нет`);
  return data;
}

async function createEnvironment(label, category, priority) {
  const data = await createEnvironmentDb(label, category, priority);
  if (data.length == 0) throw new Error(`Данные не сохранены`);
  return data;
}

async function updateEnvironmentById(id, label, category, priority) {
  const data = await updateEnvironmentByIdDb(id, label, category, priority);
  if (data.length == 0) throw new Error(`Такого id нет`);
  return data;
}
async function deleteEnvironmentById(id) {
  const data = await deleteEnvironmentByIdDb(id);
  if (data.length == 0) throw new Error(`Такого id нет`);
  return data;
}

module.exports = {
  getAllEnvironment,
  getAllEnvironmentById,
  createEnvironment,
  updateEnvironmentById,
  deleteEnvironmentById,
};

const {
  getAllEnvironmentDb,
  getAllEnvironmentByIdDb,
  createEnvironmentDb,
  updateEnvironmentByIdDb,
  deleteEnvironmentByIdDb,
} = require(`../repository/environment.repositpry`);

async function getAllEnvironment() {
  const data = await getAllEnvironmentDb();
  return data;
}

// async function getAllEnvironmentById(id) {
//   const data = await getAllEnvironmentByIdDb();
//   const filtered = data.filter((elem) => elem.id == id)
//   return filtered;
// }

async function getAllEnvironmentById(id) {
  if(id == 0) throw new Error(`id не должен ровняться нолю`)
  const data = await getAllEnvironmentByIdDb(id);
  return data;
}

async function createEnvironment(label, category, priority) {
  const data = await createEnvironmentDb(label, category, priority);
  return data;
}

async function updateEnvironmentById(id, label, category, priority) {
  const data = await updateEnvironmentByIdDb(id, label, category, priority);
  return data;
}
async function deleteEnvironmentById(id) {
  const data = await deleteEnvironmentByIdDb(id);
  return data;
}

module.exports = {
  getAllEnvironment,
  getAllEnvironmentById,
  createEnvironment,
  updateEnvironmentById,
  deleteEnvironmentById,
};

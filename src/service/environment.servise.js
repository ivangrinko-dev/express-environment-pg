const {getAllEnvironmentDb, getAllEnvironmentByIdDb} = require(`../repository/environment.repositpry`)

async function getAllEnvironment() {
  const data = await getAllEnvironmentDb();
  return data
}

async function getAllEnvironmentById(id) {
  const data = await getAllEnvironmentByIdDb(id);
  return data
}


module.exports = {getAllEnvironment, getAllEnvironmentById}
const { getAllEnvironmentDb } = require(`../repository/environment.repositpry`);

async function getAllEnvironment () {
  const data = await getAllEnvironmentDb();
  return data;
}

module.exports = { getAllEnvironment };

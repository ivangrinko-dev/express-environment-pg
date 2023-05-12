const { pool } = require(`../db`);

async function getAllEnvironmentDb() {
    console.log(`+`)
  const client = await pool.connect();
  const sql = `select * FROM environment;`;
  const result = (await client.query(sql)).rows;
  return result;
}

module.exports = { getAllEnvironmentDb };

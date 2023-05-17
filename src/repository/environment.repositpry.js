const { pool } = require(`../db`);

async function getAllEnvironmentDb() {
  const client = await pool.connect();
  const sql = `select * from environment`;
  const result = (await client.query(sql)).rows;
  return result;
}

// async function getAllEnvironmentByIdDb() {
//   const client = await pool.connect();
//   const sql = `select * from environment` ;
//   const result = (await client.query(sql)).rows;
//   return result;
// }

async function getAllEnvironmentByIdDb(id) {
  const client = await pool.connect();
  const sql = `select * from environment where id =$1`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createEnvironmentDb(label, category, priority) {
  const client = await pool.connect();
  const sql = `INSERT INTO environment(label, category, priority) VALUES ($1, $2, $3) RETURNING *`;
  const result = (await client.query(sql, [label, category, priority])).rows;
  return result;
}

async function updateEnvironmentByIdDb(id, label, category, priority) {
  const client = await pool.connect();
  const sql = `UPDATE environment set label = $1, category = $2, priority = $3 where id = $4 RETURNING * `;
  const result = (await client.query(sql, [label, category, priority, id])).rows;
  return result;
}

async function deleteEnvironmentByIdDb(id) {
  const client = await pool.connect();
  const sql = `delete from environment where id = $1 RETURNING *`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

module.exports = {
  getAllEnvironmentDb,
  getAllEnvironmentByIdDb,
  createEnvironmentDb,
  updateEnvironmentByIdDb,
  deleteEnvironmentByIdDb,
};

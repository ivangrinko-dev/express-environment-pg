const { pool } = require(`../db`);

async function getAllEnvironmentDb() {
  const client = await pool.connect()
  const sql = `select * from environment`;
  const result = (await client.query(sql)).rows;
  return result
}

async function getAllEnvironmentByIdDb() {
  const client = await pool.connect()
  const sql = `select * from environment where id = id`;
  const result = (await client.query(sql, [id])).rows;
  return result
}


module.exports = { getAllEnvironmentDb, getAllEnvironmentByIdDb}




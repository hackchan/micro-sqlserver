import { getConnection, sql } from '../../../database/connectionSqlserver'

export async function listarProductos(req, res, next) {
  try {
    const { db, table } = req.body
    if (!db || !table) {
      throw new Error('no envio db y table para realizar query')
    }
    const pool = await getConnection()
    const result = await pool
      .request()
      .query(`SELECT * FROM [${db}].[dbo].[${table}]`)
    res.json(result.recordset)
  } catch (error) {
    next(error)
  }
}

export async function addProducts(req, res, next) {
  try {
    const { db, table } = req.body
    const { name, description, quantity } = req.body.data
    if (!name || !description || !quantity || !db || !table) {
      throw new Error('complete todos los campos')
    }
    const pool = await getConnection()
    const result = await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .query(
        `INSERT INTO [${db}].[dbo].[${table}](name,description, quantity) VALUES (@name,@description, @quantity)`
      )
    res.json({ name, description, quantity })
  } catch (error) {
    next(error)
  }
}

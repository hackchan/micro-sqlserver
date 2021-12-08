import { getConnection } from '../../../database/connectionSqlserver'

export async function listarProductos(req, res, next) {
  try {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM Products')
    res.json(result.recordset)
  } catch (error) {
    next(error)
  }
}

export async function addProducts(req, res, next) {
  try {
    const { name, description, quantity } = req.body
    if (!name || !description || !quantity) {
      throw new Error('complete todos los campos')
    }
    const pool = await getConnection()
    const result = await pool
      .request()
      .query(
        "INSERT INTO Products(name,description, quantity) VALUES ('NEVERA','NEVERA NOFROST',10);"
      )
    res.json(result.recordset)
  } catch (error) {
    next(error)
  }
}

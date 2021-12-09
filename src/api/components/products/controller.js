import SQLServer from './services'
import { success } from '../../../utils/response'
const servicioSQL = new SQLServer()

export async function execSql(req, res, next) {
  try {
    const { sql } = req.body
    if (!sql) {
      throw new Error('no envio sql para realizar query')
    }
    const result = await servicioSQL.execSQL(sql)
    success(req, res, result)
  } catch (error) {
    next(error)
  }
}

export async function execQuery(req, res, next) {
  try {
    const { db, table } = req.body
    if (!db || !table) {
      throw new Error('no envio db y table para realizar query')
    }
    const result = await servicioSQL.execQuery({ db, table })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export async function addProducts(req, res, next) {
  try {
    const { db, table } = req.body
    // const pool = await getConnection()
    // const result = await pool
    //   .request()
    //   .input('name', name)
    //   .input('description', description)
    //   .input('quantity', quantity)
    //   .query(
    //     `INSERT INTO [${db}].[dbo].[${table}](name,description, quantity) VALUES (@name,@description, @quantity)`
    //   )
    await servicioSQL.execInsert({ db, table }, req.body.data)
    res.json({ msn: `Insert executado con exito` })
  } catch (error) {
    next(error)
  }
}

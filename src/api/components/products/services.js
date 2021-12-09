import { getConnection } from '../../../database/connectionSqlserver'
import { keysSql, valuesSql } from '../../../utils/util'
import { v4 as uuid } from 'uuid'
import { pool } from 'mssql'
class SQLServer {
  constructor() {}

  async execSQL(sql) {
    try {
      const tagName = `<------${uuid()}----->`
      console.time(tagName)
      const pool = await getConnection()
      const result = await pool.request().query(sql)
      console.timeEnd(tagName)
      return result.recordset ? result.recordset : 'query execute OK'
    } catch (error) {
      throw error
    } finally {
      if (pool) {
        try {
          await pool.close
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  async execQuery({ db, table }) {
    try {
      const pool = await getConnection()
      const result = await pool
        .request()
        .query(`SELECT * FROM [${db}].[dbo].[${table}]`)
      return result
    } catch (error) {
      throw error
    }
  }

  async execInsert({ db, table }, data) {
    try {
      const keys = keysSql(data)
      const values = valuesSql(data)
      let sql = `INSERT INTO [${db}].[dbo].[${table}](${keys}) VALUES (${values})`
      const pool = await getConnection()
      const result = await pool.request().query(sql)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default SQLServer

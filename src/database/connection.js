import sql from 'mssql'
import { config } from '../../config'
const dbSettings = {
  user: config.sqlserver.user,
  password: config.sqlserver.password,
  server: config.sqlserver.server,
  database: config.sqlserver.database,
  options: {
    encrypt: config.sqlserver.options.encrypt,
    trustServerCertificate: config.sqlserver.options.trustServerCertificate
  }
}

const getConnection = async () => {
   try {
      const pool = await sql.connect(dbSettings)
      return pool
   } catch (error) {
      console.log(error)
   }
}

getConnection()

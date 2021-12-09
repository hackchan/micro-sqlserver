import dotenv from 'dotenv/config'

export const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.NODE_PORT || 3000,
  sqlserver: {
    user: process.env.SQLSERVER_USER,
    password: process.env.SQLSERVER_PASS,
    server: process.env.SQLSERVER_SERVER,
    db: process.env.SQLSERVER_DB,
    options: {
      encrypt: process.env.SERVER_DB_ENCRYPT === true,
      trustServerCertificate:
        process.env.SERVER_DB_TRUSTSERVERCERTIFICATE === true
    }
  }
}

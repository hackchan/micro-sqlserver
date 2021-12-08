import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from '../config'
import routers from './routers/router'
import { wrapError, errorResponse } from './utils/middlewares/error'
const app = express()
//settings
app.set('port', config.port)

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

routers(app)

app.use(wrapError)
app.use(errorResponse)

export default app

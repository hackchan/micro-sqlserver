import { Router } from 'express'
import { execSql } from './controller'
const router = Router()

router.get('/sql', execSql)

export default router

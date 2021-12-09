import { Router } from 'express'
import { execQuery, addProducts, execSql } from './controller'
const router = Router()

router.get('/', execQuery)
router.get('/sql', execSql)
router.post('/', addProducts)

export default router

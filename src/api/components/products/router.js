import { Router } from 'express'
import { listarProductos, addProducts } from './controller'
const router = Router()

router.get('/', listarProductos)
// router.get('/:id', listarProductosById)
router.post('/', addProducts)
// router.put('/', editProduct)
// router.delete('/', deleteProduct)

export default router

import { Router } from 'express'
import productsRoute from '../api/components/products/router'

const routers = (app) => {
  const router = Router()
  app.use('/', router)
  router.use('/products', productsRoute)
}

export default routers

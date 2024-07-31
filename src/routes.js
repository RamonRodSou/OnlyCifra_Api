import { Router } from 'express'
import SessionController from './controllers/SessionController'
import CifraController from './controllers/CifraController'

const routes = new Router()

routes.post('/sessions', SessionController.store)
routes.post('/cifras', CifraController.store)

export default routes 
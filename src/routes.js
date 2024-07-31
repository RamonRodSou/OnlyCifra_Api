import { Router } from 'express'
import SessionController from './controllers/SessionController'
import CifraController from './controllers/CifraController'

const routes = new Router()

routes.post('/sessions', SessionController.store)

routes.post('/cifras', CifraController.store)
routes.get('/cifras', CifraController.index)
routes.put('/cifras/:cifra_id', CifraController.update)
routes.delete('/cifras/delete/:cifra_id', CifraController.destroy)


export default routes 
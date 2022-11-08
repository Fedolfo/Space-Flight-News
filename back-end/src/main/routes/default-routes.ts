/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { MakeDefaultController } from '../factories/controllers/default/default-controller-factory'

export default (router: Router): void => {
  router.get('/', adaptRoute(MakeDefaultController()))
}

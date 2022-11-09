/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { MakeLoadArticlesResultController } from '../factories/controllers/articles-controller/load-articles-result'

export default async (router: Router): Promise<void> => {
  router.get('/articles/:id', adaptRoute(MakeLoadArticlesResultController()))
}

/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { MakeArticlesController } from '../factories/controllers/articles-controller/load-articles-controller'

export default async (router: Router): Promise<void> => {
  router.get('/articles', adaptRoute(await MakeArticlesController()))
}

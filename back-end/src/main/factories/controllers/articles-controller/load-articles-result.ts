/* eslint-disable @typescript-eslint/no-misused-promises */
import { ArticlesMongoRepository } from '../../../../infra/mongodb/articles/articles-mongo-repository'
import { LoadArticlesResultController } from '../../../../presentation/controllers/articles/load-articles-result-controller'
import { Controller } from '../../../../presentation/protocols'

export const MakeLoadArticlesResultController = (): Controller => {
  const articlesMongoRepository = new ArticlesMongoRepository()
  const loadArticlesController = new LoadArticlesResultController(articlesMongoRepository)
  return loadArticlesController
}

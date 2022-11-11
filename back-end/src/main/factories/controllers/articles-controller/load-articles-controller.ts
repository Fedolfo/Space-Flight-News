/* eslint-disable @typescript-eslint/no-misused-promises */
import { SpaceFlightModel } from '../../../../api/protocols/space-flight-model'
import { load } from '../../../../api/space-flight'
import { DbLoadArticles } from '../../../../data/usecases/db-load-articles'
import { ArticlesMongoRepository } from '../../../../infra/mongodb/articles/articles-mongo-repository'
import { LoadArticlesController } from '../../../../presentation/controllers/articles/articles-controller'
import { Controller } from '../../../../presentation/protocols'
import cron from 'node-cron'

const MakeAddArticle = async (): Promise<SpaceFlightModel[]> => {
  const articlesMongoRepository = new ArticlesMongoRepository()
  const loadArticles = await load()
  return await articlesMongoRepository.load(loadArticles)
}

const MakeDeleteArticle = async (): Promise<SpaceFlightModel[]> => {
  const articlesMongoRepository = new ArticlesMongoRepository()
  return await articlesMongoRepository.deleteArticles()
}

export const MakeArticlesController = async (): Promise<Controller> => {
  // await MakeAddArticle() // <--- Para questões de testar a aplicação, deve remover o comentário da função para ser possível popular o banco de dados, logo em seguida dar o comando no "cmd" "npm run start:nodemon". ps: Apos, popular recomendaria comentar a função para não popular demais o banco xD, caso se você iniciar o comando de iniciar novamente o servidor novamente, pode ocorrer esse leve acaso <3.
  cron.schedule('1 * 9 * * *', async () => await MakeAddArticle())
  cron.schedule('0 * 9 * * *', async () => await MakeDeleteArticle())
  const articlesMongoRepository = new ArticlesMongoRepository()
  const dbLoadArticles = new DbLoadArticles(articlesMongoRepository)
  const loadArticlesController = new LoadArticlesController(dbLoadArticles)
  return loadArticlesController
}

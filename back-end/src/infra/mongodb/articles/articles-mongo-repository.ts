import { SpaceFlightModel } from '../../../api/protocols/space-flight-model'
import { AddArticlesRepository } from '../../../data/protocols/db/articles/add-articles-repository'
import { DeleteArticlesRepository } from '../../../data/protocols/db/articles/delete-articles-repository'
import { LoadArticlesRepository } from '../../../data/protocols/db/articles/load-articles-repository'
import { ArticlesModel } from '../../../domain/models/articles'
import { MongoHelper } from '../helpers/mongo-helper'

export class ArticlesMongoRepository implements AddArticlesRepository, LoadArticlesRepository, DeleteArticlesRepository {
  async load(articlesData: SpaceFlightModel[]): Promise<ArticlesModel[]> {
    const articlesCollection = await MongoHelper.getCollection('articles')
    const result = await articlesCollection.insertMany(articlesData)
    return result as unknown as ArticlesModel[]
  }

  async loadAllArticles (): Promise<ArticlesModel[]> {
    const surveyCollection = await MongoHelper.getCollection('articles')
    const surveys = await surveyCollection.find({}).toArray()
    return surveys as unknown as ArticlesModel[]
  }

  async deleteArticles (): Promise<ArticlesModel[]> {
    const surveyCollection = await MongoHelper.getCollection('articles')
    const surveys = await surveyCollection.deleteMany({})
    return surveys as unknown as ArticlesModel[]
  }
}

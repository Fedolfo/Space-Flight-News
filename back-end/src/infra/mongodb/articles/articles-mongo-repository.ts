import { ObjectId } from 'mongodb'
import { SpaceFlightModel } from '../../../api/protocols/space-flight-model'
import { AddArticlesRepository } from '../../../data/protocols/db/articles/add-articles-repository'
import { DeleteArticlesRepository } from '../../../data/protocols/db/articles/delete-articles-repository'
import { GetIdArticlesRepository } from '../../../data/protocols/db/articles/get-id-articles-respository'
import { LoadArticlesRepository } from '../../../data/protocols/db/articles/load-articles-repository'
import { ArticlesModel } from '../../../domain/models/articles'
import { MongoHelper } from '../helpers/mongo-helper'

export class ArticlesMongoRepository implements AddArticlesRepository, LoadArticlesRepository, DeleteArticlesRepository, GetIdArticlesRepository {
  async load(articlesData: SpaceFlightModel[]): Promise<ArticlesModel[]> {
    const articlesCollection = await MongoHelper.getCollection('articles')
    const result = articlesCollection.insertMany(articlesData)
    return result as unknown as ArticlesModel[]
  }

  async loadAllArticles (page: number = 2): Promise<ArticlesModel[]> {
    const articlesCollection = await MongoHelper.getCollection('articles')
    const result = articlesCollection.find({}).limit(Number(page)).toArray()
    return result as unknown as ArticlesModel[]
  }

  async deleteArticles (): Promise<ArticlesModel[]> {
    const articlesCollection = await MongoHelper.getCollection('articles')
    const result = articlesCollection.deleteMany({})
    return result as unknown as ArticlesModel[]
  }

  async getIdArticle (articleId: string): Promise<ArticlesModel> {
    const articlesCollection = await MongoHelper.getCollection('articles')

    const result = await articlesCollection.findOne({
      _id: new ObjectId(articleId)
    })

    return result as unknown as ArticlesModel
  }
}

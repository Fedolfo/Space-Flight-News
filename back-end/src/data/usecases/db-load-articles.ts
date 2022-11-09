import { ArticlesModel } from '../../domain/models/articles'
import { LoadArticles } from '../../domain/usecases/load-articles'
import { LoadArticlesRepository } from '../protocols/db/articles/load-articles-repository'

export class DbLoadArticles implements LoadArticles {
  constructor(private readonly loadArticlesRepository: LoadArticlesRepository) {}

  async loadAllArticles (page: number): Promise<ArticlesModel[]> {
    return await this.loadArticlesRepository.loadAllArticles(page)
  }
}

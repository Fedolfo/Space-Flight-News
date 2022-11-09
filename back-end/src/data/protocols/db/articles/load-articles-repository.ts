import { ArticlesModel } from '../../../../domain/models/articles'

export interface LoadArticlesRepository {
  loadAllArticles: (page: number) => Promise<ArticlesModel[]>
}

import { ArticlesModel } from '../../../../domain/models/articles'

export interface LoadArticlesRepository {
  loadAllArticles: () => Promise<ArticlesModel[]>
}

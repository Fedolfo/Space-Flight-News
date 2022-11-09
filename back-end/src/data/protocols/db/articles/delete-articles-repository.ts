import { ArticlesModel } from '../../../../domain/models/articles'

export interface DeleteArticlesRepository {
  deleteArticles: () => Promise<ArticlesModel[]>
}

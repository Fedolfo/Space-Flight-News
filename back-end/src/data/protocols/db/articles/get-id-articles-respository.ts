import { ArticlesModel } from '../../../../domain/models/articles'

export interface GetIdArticlesRepository {
  getIdArticle: (articleId: string) => Promise<ArticlesModel>
}

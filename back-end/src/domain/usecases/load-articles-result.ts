import { ArticlesModel } from '../models/articles'

export interface ArticleId {
  getIdArticle: (id: string) => Promise<ArticlesModel>
}

import { ArticlesModel } from '../models/articles'

export interface LoadArticles {
  loadAllArticles: () => Promise<ArticlesModel[]>
}

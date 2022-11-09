import { ArticlesModel } from '../models/articles'

export interface LoadArticles {
  loadAllArticles: (page: number) => Promise<ArticlesModel[]>
}

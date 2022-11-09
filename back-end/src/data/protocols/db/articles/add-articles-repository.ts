import { SpaceFlightModel } from '../../../../api/protocols/space-flight-model'
import { ArticlesModel } from '../../../../domain/models/articles'

export interface AddArticlesRepository {
  load: (articlesData: SpaceFlightModel[]) => Promise<ArticlesModel[]>
}

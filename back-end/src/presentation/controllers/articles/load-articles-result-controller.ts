import { ArticleId } from '../../../domain/usecases/load-articles-result'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { forbidden, OK, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoadArticlesResultController implements Controller {
  constructor(private readonly articleId: ArticleId) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.id
      const exists = await this.articleId.getIdArticle(id)
      if (!exists) {
        return forbidden(new InvalidParamError('articleId'))
      }
      return OK(exists)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

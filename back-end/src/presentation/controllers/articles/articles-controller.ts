import { LoadArticles } from '../../../domain/usecases/load-articles'
import { noContent, OK, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoadArticlesController implements Controller {
  constructor(private readonly loadArticles: LoadArticles) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const p = httpRequest.query.p
      const results = await this.loadArticles.loadAllArticles(p)
      return (results.length > 0) ? OK(results) : noContent()
    } catch (error) {
      console.log(error)
      return serverError(error as Error)
    }
  }
}

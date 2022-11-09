import { LoadArticles } from '../../../domain/usecases/load-articles'
import { noContent, OK, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoadArticlesController implements Controller {
  constructor(private readonly loadArticles: LoadArticles) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.loadArticles.loadAllArticles()
      return (result.length > 0) ? OK(result) : noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

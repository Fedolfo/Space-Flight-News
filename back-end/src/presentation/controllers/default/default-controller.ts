import { OK } from '../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../protocols'

export class DefaultController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return OK('Fullstack Challenge 2021 🏅 - Space Flight News')
  }
}

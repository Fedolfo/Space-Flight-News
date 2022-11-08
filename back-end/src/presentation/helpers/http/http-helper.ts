import { HttpResponse } from '../../protocols'

export const OK = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

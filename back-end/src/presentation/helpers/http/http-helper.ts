import { ServerError } from '../../errors/server-error'
import { HttpResponse } from '../../protocols'

export const OK = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string)
})

import { OK } from '../helpers/http/http-helper'
import { DefaultController } from './default-controller'

interface SutTypes {
  sut: DefaultController
}

const makeSut = (): SutTypes => {
  const sut = new DefaultController()
  return {
    sut
  }
}

describe('DefaultController', () => {
  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(OK('Fullstack Challenge 2021 🏅 - Space Flight News'))
  })
})

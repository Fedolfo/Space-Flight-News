import { DefaultController } from '../../../../presentation/controllers/default/default-controller'
import { Controller } from '../../../../presentation/protocols'

export const MakeDefaultController = (): Controller => {
  const defaultController = new DefaultController()
  return defaultController
}

import { SpaceFlightModel } from './space-flight-model'

export interface LoadSpaceFlight {
  load: () => Promise<SpaceFlightModel[]>
}

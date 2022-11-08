import { LoadSpaceFlight } from './protocols/load-space-flight'
import { SpaceFlightModel } from './protocols/space-flight-model'
import fetch from 'cross-fetch'

export class SpaceFlight implements LoadSpaceFlight {
  async load(): Promise<SpaceFlightModel[]> {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1'
    const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
    if (response.status >= 400) {
      throw new Error('Bad response from server')
    }
    const result = await response.json()
    return result.forEach((element: SpaceFlightModel[]) => {
      return element
    })
  }
}

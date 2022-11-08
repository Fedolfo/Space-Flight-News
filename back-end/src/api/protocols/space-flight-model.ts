interface LaunchesModel {
  id: string | null
  provider: string | null
}

interface EventsModel {
  id: string | null
  provider: string | null
}

export interface SpaceFlightModel {
  id: number
  featured: boolean
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: LaunchesModel[]
  events: EventsModel[]
}

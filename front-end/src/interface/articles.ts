interface Launches {
  id: string | null
  provider: string | null
}

interface Events {
  id: string | null
  provider: string | null
}

export interface ArticlesModel {
  _id: string
  id: number
  featured: boolean
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: Launches[]
  events: Events[]
}

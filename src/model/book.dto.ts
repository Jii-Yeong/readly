export type SearchBookRequest = {
  query: string;
  display?: string;
  start?: string;
  sort?: 'sim' | 'date'
}

export type SearchBookResponse = {
  lastBuildDate: string
  total: number
  start: number
  display: number
  items: SearchBookItem[]
}

export type SearchBookItem = {
  title: string
  link: string
  image: string
  author: string
  discount: string
  publisher: string
  pubdate: string
  isbn: string
  description: string
}
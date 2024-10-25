export type SearchBookRequest = {
  query: string;
  display?: string;
  start?: string;
  sort?: 'sim' | 'date'
}
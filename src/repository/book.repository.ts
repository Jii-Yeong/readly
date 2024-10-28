import { readlyApiAxiosInstance } from "@/api/readly-api"
import { SearchBookRequest, SearchBookResponse } from "@/model/book.dto"

export const searchBookList = async (params: SearchBookRequest) => {
  const { data } = await readlyApiAxiosInstance().post<SearchBookResponse>('/book/search', params)
  return data
}
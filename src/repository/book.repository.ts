import { readlyApiAxiosInstance } from "@/api/readly-api"
import { SearchBookRequest } from "@/model/book.dto"

export const searchBookList = async (params: SearchBookRequest) => {
  const { data } = await readlyApiAxiosInstance().post('/book/search', params)
  return data
}
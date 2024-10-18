import axios from "axios"

export const readlyApiAxiosInstance = () => {
  return axios.create({ baseURL: process.env.NEXT_PUBLIC_READLY_API_URL })
}
import { readlyApiAxiosInstance } from "@/api/readly-api"
import axios from "axios"

export const addUserData = async () => {
  await readlyApiAxiosInstance().post('api/sign-up', { data: 1 })
}
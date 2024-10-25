import { searchBookList } from "@/repository/book.repository"
import { useMutation } from "@tanstack/react-query"

export const searchBookMutation = () => {
  return useMutation({
    mutationFn: searchBookList,
  })
}